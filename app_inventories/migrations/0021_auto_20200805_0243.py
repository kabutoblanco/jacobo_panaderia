# Generated by Django 3.0.8 on 2020-08-05 07:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0020_auto_20200805_0237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 43, 10, 89143)),
        ),
        migrations.AlterField(
            model_name='action',
            name='last_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 43, 10, 89190)),
        ),
        migrations.AlterField(
            model_name='pay',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 4, 21, 43, 10, 91528)),
        ),
    ]
