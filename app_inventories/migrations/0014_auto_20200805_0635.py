# Generated by Django 3.0.8 on 2020-08-05 06:35

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0013_auto_20200805_0635'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 1, 35, 44, 958273, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 1, 35, 44, 958325, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 1, 35, 44, 960653, tzinfo=utc)),
        ),
    ]
