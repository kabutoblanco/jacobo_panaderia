# Generated by Django 3.0.8 on 2020-08-03 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_products', '0011_auto_20200802_2222'),
        ('app_inventories', '0007_action_duties_details'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detail',
            name='duties',
        ),
        migrations.AlterField(
            model_name='action',
            name='duties',
            field=models.ManyToManyField(blank=True, to='app_products.Duty'),
        ),
        migrations.DeleteModel(
            name='Duty',
        ),
    ]
