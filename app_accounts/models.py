from django.db import models
from django.contrib.auth.models import Permission, AbstractUser
from django.utils.translation import ugettext_lazy as _


# Create your models here.
class User(AbstractUser):
    ID_CHOICES = (
        (1, _("CEDULA")),
        (2, _("CEDULA_EXTRANJERIA")),
        (3, _("TARJETA_IDENTIDAD")),
    )

    ROLE_CHOICES = (
        (1, _("PERSONAL")),
        (2, _("TERCERO")),
    )

    type_id = models.IntegerField(choices=ID_CHOICES, default=1)
    personal_id = models.CharField(max_length=14, unique=True)
    cellphone = models.CharField(max_length=16)
    telephone = models.CharField(max_length=16, blank=True)
    address = models.CharField(max_length=24, blank=True)
    neighborhod = models.CharField(max_length=24, blank=True)
    country = models.CharField(max_length=16, default="CO")
    government = models.CharField(max_length=16, blank=True)
    city = models.CharField(max_length=16, blank=True)

    role = models.IntegerField(choices=ROLE_CHOICES, default=1)

    def __str__(self):
        return "{}".format(self.username)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"


class Staff(models.Model):
    TYPE_CHOICES = (
        (1, _("ADMINISTRADOR")),
        (2, _("PRODUCTOR")),
        (3, _("VENDEDOR")),
    )
    
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.type)

    class Meta:
        verbose_name = "Trabajador"
        verbose_name_plural = "Personal"


class Simple(models.Model):
    TYPE_CHOICES = (
        (1, _("CLIENTE")),
        (2, _("PROVEEDOR")),
    )

    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.type)

    class Meta:
        verbose_name = "Tercero"
        verbose_name_plural = "Terceros"

