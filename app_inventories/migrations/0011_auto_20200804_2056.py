# Generated by Django 3.0.8 on 2020-08-05 01:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0010_auto_20200804_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.date(2020, 8, 4)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.date(2020, 8, 4)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.date(2020, 8, 4)),
        ),
    ]
