# Generated by Django 3.0.8 on 2020-08-05 04:01

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app_products', '0012_auto_20200803_0054'),
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subtotal', models.FloatField(default=0.0)),
                ('total', models.FloatField(default=0.0)),
                ('date', models.DateTimeField(default=datetime.datetime(2020, 8, 4, 23, 1, 17, 205518, tzinfo=utc))),
                ('last_date', models.DateTimeField(default=datetime.datetime(2020, 8, 4, 23, 1, 17, 205563, tzinfo=utc))),
                ('type', models.IntegerField(choices=[(1, 'CONTADO'), (2, 'CREDITO'), (3, 'MIXTO')], default=1)),
                ('duties_details', models.FloatField(default=0.0)),
                ('is_active', models.BooleanField(default=True)),
                ('duties', models.ManyToManyField(blank=True, to='app_products.Duty')),
                ('polymorphic_ctype', models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='polymorphic_app_inventories.action_set+', to='contenttypes.ContentType')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
                'base_manager_name': 'objects',
            },
        ),
        migrations.CreateModel(
            name='Buy',
            fields=[
                ('action_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='app_inventories.Action')),
                ('invoice', models.CharField(max_length=32, unique=True)),
            ],
            options={
                'verbose_name': 'Compra',
                'verbose_name_plural': 'Compras',
            },
            bases=('app_inventories.action',),
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('action_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='app_inventories.Action')),
                ('invoice', models.CharField(max_length=32, unique=True)),
                ('mode', models.IntegerField(choices=[(1, 'LOCAL'), (2, 'DOMICILIO')], default=1)),
            ],
            options={
                'verbose_name': 'Venta',
                'verbose_name_plural': 'Ventas',
            },
            bases=('app_inventories.action',),
        ),
        migrations.CreateModel(
            name='Pay',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=32, unique=True)),
                ('type', models.IntegerField(choices=[(1, 'CASH'), (2, 'CREDIT_CARD'), (3, 'DEBIT_CARD'), (4, 'PSE'), (5, 'BRANCH')], default=1)),
                ('payment', models.FloatField(default=0.0)),
                ('date', models.DateTimeField(default=datetime.datetime(2020, 8, 4, 23, 1, 17, 207950, tzinfo=utc))),
                ('is_active', models.BooleanField(default=True)),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_inventories.Action')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Pago',
                'verbose_name_plural': 'Pagos',
            },
        ),
        migrations.CreateModel(
            name='Detail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(default=0.0)),
                ('subtotal', models.FloatField(default=0.0)),
                ('total', models.FloatField(default=0.0)),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_inventories.Action')),
                ('presentation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_products.ProductPresentation')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_products.Product')),
            ],
            options={
                'verbose_name': 'Detalle',
                'verbose_name_plural': 'Detalles',
            },
        ),
    ]
