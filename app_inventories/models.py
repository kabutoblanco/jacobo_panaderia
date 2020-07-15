from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from ..app_products.models import Product


# Create your models here.
class InventoryManager(BaseUserManager):
    def create_inventory(self, validate_data):
        inventory = Product(**validate_data)
        inventory.save()
        return inventory


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


class Inventory(models.Model):
    code = models.CharField(max_length=12)  
    date_init = models.DateField()
    date_end = models.DateField()

    def __str__(self):
        return "{}".format(self.code)

    class Meta:
        verbose_name = "Inventario"
        verbose_name_plural = "Inventarios"


class Action(models.Model):
    TYPE_CHOICES = ((1, _("CONTADO")), (2, _("CREDITO")), (3, _("MIXTO")))

    client = models.CharField(max_length=24)
    price = models.FloatField(default=0.0)
    price_partial = models.FloatField(default=0.0)
    date = models.DateTimeField(auto_now=True)
    last_date = models.DateTimeField(auto_now=True)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.price)

    
class ProductAction(models.Model):
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    amount = models.FloatField(default=0.0)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return "{}".format(self.action)


class Sale(Action):
    TYPE_CHOICES = ((1, _("LOCAL")), (2, _("DOMICILIO"))))

    code = models.CharField(max_length=12)   
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)

    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"


class Buy(Action):
    code = models.CharField(max_length=12)

    class Meta:
        verbose_name = "Compra"
        verbose_name_plural = "Compras"