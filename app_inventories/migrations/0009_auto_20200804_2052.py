# Generated by Django 3.0.8 on 2020-08-05 01:52

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0008_auto_20200802_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 1, 52, 40, 850261, tzinfo=utc)),
        ),
    ]
