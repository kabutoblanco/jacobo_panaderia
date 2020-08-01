from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from polymorphic.models import PolymorphicModel
from app_products.models import Product, ProductPresentation
from app_accounts.models import User


# Create your models here.
class SaleManager(BaseUserManager):
    def create_sale(self, validate_data):
        sale = Sale(**validate_data)
        sale.save()
        return sale


class BuyManager(BaseUserManager):
    def create_buy(self, validate_data):
        buy = Buy(**validate_data)
        buy.save()
        return buy


class Duty(models.Model):
    code = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=16)
    percentage_price = models.FloatField(default=0.0)
    fixed_price = models.FloatField(default=0.0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Impuesto"
        verbose_name_plural = "Impuestos"

    def __str__(self):
        return "[{}] {}".format(self.code, self.name)


class Action(PolymorphicModel):
    TYPE_CHOICES = ((1, _("CONTADO")), (2, _("CREDITO")), (3, _("MIXTO")))

    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             blank=True,
                             null=True)
    subtotal = models.FloatField(default=0.0)
    total = models.FloatField(default=0.0)
    date = models.DateTimeField(auto_now=True)
    last_date = models.DateTimeField(auto_now=True)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    duties = models.ManyToManyField(Duty, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "[{}] {}".format(self.id, self.total)


class Pay(models.Model):
    TYPE_CHOICES = ((1, _("CASH")), (2, _("CREDIT_CARD")),
                    (3, _("DEBIT_CARD")), (4, _("PSE")), (5, _("BRANCH")))

    code = models.CharField(max_length=32, unique=True)
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             blank=True,
                             null=True)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    payment = models.FloatField(default=0.0)
    date = models.DateTimeField(auto_now=True)
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "[{}] {}".format(self.code, self.action)

    class Meta:
        verbose_name = "Pago"
        verbose_name_plural = "Pagos"


class Detail(models.Model):
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    presentation = models.ForeignKey(ProductPresentation,
                                     on_delete=models.CASCADE)
    amount = models.FloatField(default=0.0)
    subtotal = models.FloatField(default=0.0)
    duties = models.ManyToManyField(Duty, blank=True)

    def __str__(self):
        return "[{}] {}".format(self.id, self.product)

    class Meta:
        verbose_name = "Detalle"
        verbose_name_plural = "Detalles"


class Sale(Action):
    TYPE_CHOICES = ((1, _("LOCAL")), (2, _("DOMICILIO")))

    invoice = models.CharField(max_length=32, unique=True)
    mode = models.IntegerField(choices=TYPE_CHOICES, default=1)

    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"


class Buy(Action):
    invoice = models.CharField(max_length=32, unique=True)

    class Meta:
        verbose_name = "Compra"
        verbose_name_plural = "Compras"
