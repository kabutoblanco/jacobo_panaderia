# Generated by Django 3.0.8 on 2020-08-05 02:04

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0012_auto_20200804_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 4, 22, 736582, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 4, 22, 736627, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 4, 22, 739097, tzinfo=utc)),
        ),
    ]