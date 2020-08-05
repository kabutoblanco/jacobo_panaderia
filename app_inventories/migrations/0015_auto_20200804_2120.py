# Generated by Django 3.0.8 on 2020-08-05 02:20

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0014_auto_20200804_2107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 20, 10, 9306, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 20, 10, 9437, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 5, 2, 20, 10, 11874, tzinfo=utc)),
        ),
    ]
