# Generated by Django 5.0.6 on 2024-06-22 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
        migrations.AddField(
            model_name='item',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='first_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='last_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='middle_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='phone',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
