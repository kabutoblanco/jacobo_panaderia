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
    TYPE_CHOICES = ((1, _("PANADERIA")), (2, _("TIENDA")))

    code = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=124)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)

    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"


class Unit(models.Model):
    code = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=64)
    abbr = models.CharField(max_length=8)

    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        verbose_name = "Unidad"
        verbose_name_plural = "Unidades"


class Presentation(models.Model):
    code = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=64)
    amount = models.FloatField(default=0.0)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        verbose_name = "Presentacion"
        verbose_name_plural = "Presentaciones"


class Duty(models.Model):
    code = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=16)
    value = models.FloatField(default=0.0)
    is_percentage = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Impuesto"
        verbose_name_plural = "Impuestos"

    def __str__(self):
        return "[{}] {}".format(self.code, self.name)


class Product(models.Model):
    ref = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=64, blank=True)
    main_image = models.FileField()
    price_buy = models.FloatField(default=0.0)
    stock = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    unit_base = models.ForeignKey(Unit, on_delete=models.CASCADE)
    duties = models.ManyToManyField(Duty, blank=True)
    is_active = models.BooleanField(default=True)
    is_store = models.BooleanField(default=True)
    presentations = models.ManyToManyField(Presentation, through='ProductPresentation', through_fields=('product', 'presentation'))
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.name)

    objects = ProductManager()

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"


class Image(models.Model):
    code = models.CharField(max_length=16, unique=True)
    image = models.FileField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "{}".format(self.code)

    class Meta:
        verbose_name = "Imagen"
        verbose_name_plural = "Imagenes"


class ProductPresentation(models.Model):
    code = models.CharField(max_length=12, unique=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    presentation = models.ForeignKey(Presentation, on_delete=models.CASCADE)
    stock = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    price_sale = models.FloatField(default=0.0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "[{}] {} {}".format(self.id, self.presentation.name, self.price_sale)

    class Meta:
        verbose_name = "Mi presentacion"
        verbose_name_plural = "Mis presentaciones"

