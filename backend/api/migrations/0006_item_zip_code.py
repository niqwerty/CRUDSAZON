# Generated by Django 5.0.6 on 2024-07-11 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_item_description_remove_item_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='zip_code',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
