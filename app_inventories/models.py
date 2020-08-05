from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from polymorphic.models import PolymorphicModel
from app_products.models import Product, ProductPresentation, Duty
from app_accounts.models import User
import datetime as dt
import pytz


# Create your models here.
class DetailManager(BaseUserManager):
    def create_detail(self, validated_data):
        detail = Detail(**validated_data)
        detail.save()
        return detail


class PayManager(BaseUserManager):
    def create_pay(self, validated_data):
        pay = Pay(**validated_data)
        pay.save()
        return pay


class ActionHelper():
    def register_details(self, validated_data):
        data = validated_data["data"]
        action = validated_data["action"]
        serializer_detail = validated_data["serializer"]
        accumulated_duties = 0
        subtotal_sale = 0
        total_sale = 0
        for detail in data["details"]:
            query_presentation = ProductPresentation.objects.get(
                pk=detail["presentation"])
            if validated_data["is_sale"]:
                detail["subtotal"] = query_presentation.price_sale * detail[
                    "amount"]
            else:
                detail[
                    "subtotal"] = query_presentation.product.price_buy * detail[
                        "amount"]
            subtotal_sale += detail["subtotal"]
            duties = 0
            query_product = Product.objects.get(pk=detail["product"])
            if validated_data["is_sale"]:
                query_presentation.stock -= detail["amount"]
                query_product.stock -= detail[
                    "amount"] * query_presentation.presentation.amount
            else:
                query_presentation.stock += detail["amount"]
                query_product.stock += detail[
                    "amount"] * query_presentation.presentation.amount
            query_presentation.save()
            query_product.save()
            query_duty = query_product.duties.all()
            for duty in query_duty:
                if duty.is_percentage:
                    duties += detail["subtotal"] * duty.value
                    accumulated_duties += detail["subtotal"] * duty.value
                else:
                    duties += query_duty.value
                    accumulated_duties += duty.value
            detail["action"] = action.id
            detail["total"] = detail["subtotal"] + duties
            serializer = serializer_detail(data=detail)
            serializer.is_valid(raise_exception=True)
            detail_instance = serializer.save()
            total_sale += detail["total"]
        action.duties_details = accumulated_duties
        action.subtotal = subtotal_sale
        action.total = total_sale
        action.save()

    def register_duties(self, validated_data):
        data = validated_data["data"]
        action = validated_data["action"]
        accumulated_duties = 0
        for duty in data["action"]["duties_list"]:
            query_duty = Duty.objects.get(pk=duty)
            if query_duty.is_percentage:
                accumulated_duties += action.subtotal * query_duty.value
            else:
                accumulated_duties += query_duty.value
        action.total = action.subtotal + action.duties_details + accumulated_duties
        action.duties.add(*data["action"]["duties_list"])
        action.save()

    def register_pays(self, validated_data):
        data = validated_data["data"]
        action = validated_data["action"]
        serializer_pay = validated_data["serializer"]
        for pay in data["pays"]:
            pay["action"] = action.id
            serializer = serializer_pay(data=pay)
            serializer.is_valid(raise_exception=True)
            pay_instance = serializer.save()


class Action(PolymorphicModel):
    TYPE_CHOICES = ((1, _("CONTADO")), (2, _("CREDITO")), (3, _("MIXTO")))

    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             blank=True,
                             null=True)
    subtotal = models.FloatField(default=0.0)
    total = models.FloatField(default=0.0)
    date = models.DateTimeField(auto_now=False, default=pytz.utc.localize(dt.datetime.now()))
    last_date = models.DateTimeField(auto_now=True)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    duties = models.ManyToManyField(Duty, blank=True)
    duties_details = models.FloatField(default=0.0)
    is_active = models.BooleanField(default=True)

    helper = ActionHelper()

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

    objects = PayManager()

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
    total = models.FloatField(default=0.0)

    objects = DetailManager()

    def __str__(self):
        return "[{}] {}".format(self.id, self.action)

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
