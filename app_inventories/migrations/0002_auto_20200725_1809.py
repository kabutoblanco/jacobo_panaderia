# Generated by Django 2.2.7 on 2020-07-25 23:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_inventories', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pay',
            old_name='actions',
            new_name='action',
        ),
    ]
