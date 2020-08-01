# Generated by Django 3.0.8 on 2020-08-01 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_products', '0009_auto_20200731_1651'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='product',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='product',
            name='is_store',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='productpresentation',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]