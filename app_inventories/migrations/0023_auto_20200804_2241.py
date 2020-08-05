# Generated by Django 3.0.8 on 2020-08-05 03:41

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0022_auto_20200804_2233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 22, 41, 40, 973759, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 22, 41, 40, 973803, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 22, 41, 40, 976220, tzinfo=utc)),
        ),
    ]
