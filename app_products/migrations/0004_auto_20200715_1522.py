# Generated by Django 2.2.7 on 2020-07-15 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_products', '0003_auto_20200714_1725'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.FileField(upload_to=''),
        ),
    ]