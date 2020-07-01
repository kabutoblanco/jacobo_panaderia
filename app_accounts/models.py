from django.db import models
from django.contrib.auth.models import Permission, AbstractUser, BaseUserManager
from django.utils.translation import ugettext_lazy as _


# Create your models here.
class User(AbstractUser):
    ROLE_CHOICES = (
        (1, _("ADMINISTRADOR")),
        (2, _("PRODUCTOR")),
        (3, _("VENDEDOR")),
    )

    role = models.IntegerField(choices=ROLE_CHOICES, default=1)

    def __str__(self):
        return '{}'.format(self.username)

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'


