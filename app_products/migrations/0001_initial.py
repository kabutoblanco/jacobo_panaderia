# Generated by Django 2.2.7 on 2020-06-30 17:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=124)),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=124)),
                ('price_buy', models.FloatField(default=0.0)),
                ('price_sale', models.FloatField(default=0.0)),
                ('presentation', models.CharField(max_length=16)),
                ('stock', models.IntegerField(default=0)),
                ('type_product', models.IntegerField(choices=[(1, 'PRODUCIDO'), (2, 'TERCERO')], default=1)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_products.Category')),
            ],
            options={
                'verbose_name': 'Producto',
                'verbose_name_plural': 'Productos',
            },
        ),
    ]
