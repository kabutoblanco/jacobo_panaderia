# Generated by Django 3.0.8 on 2020-08-05 07:58

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0025_auto_20200805_0256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 7, 58, 26, 315801, tzinfo=utc)),
        ),
    ]
