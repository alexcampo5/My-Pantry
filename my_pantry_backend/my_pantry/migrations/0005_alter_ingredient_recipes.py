# Generated by Django 4.1 on 2022-09-06 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_pantry', '0004_alter_ingredient_recipes_delete_mealtable'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredient',
            name='recipes',
            field=models.ManyToManyField(blank=True, to='my_pantry.recipe'),
        ),
    ]
