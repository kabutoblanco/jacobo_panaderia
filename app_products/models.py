from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.utils.translation import ugettext_lazy as _


# Create your models here.
class ProductManager(BaseUserManager):
    def create_product(self, validate_data):
        product = Product(**validate_data)
        product.save()
        return product


class Category(models.Model):
    name = models.CharField(max_length=124)

    def __str__(self):
        return '{}'.format(self.name)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'


class Product(models.Model):
    TYPE_CHOICES = (
        (1, _("PRODUCIDO")),
        (2, _("TERCERO"))
    )

    code = models.IntegerField(default=0)
    name = models.CharField(max_length=124)
    price_buy = models.FloatField(default=0.0)
    price_sale = models.FloatField(default=0.0)
    presentation = models.CharField(max_length=16)
    stock = models.IntegerField(default=0)
    type_product = models.IntegerField(choices=TYPE_CHOICES, default=1)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.name)

    objects = ProductManager()

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'