# Generated by Django 3.0.8 on 2020-08-05 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0021_auto_20200805_0243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]