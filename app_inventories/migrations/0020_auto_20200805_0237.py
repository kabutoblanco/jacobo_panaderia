# Generated by Django 3.0.8 on 2020-08-05 02:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0019_auto_20200805_0225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 37, 27, 972369)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 37, 27, 972417)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 37, 27, 975344)),
        ),
    ]
