from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)

    def __str__(self):
        return self.username


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.CharField(max_length=300)
    directions = models.TextField(
        default='Directions:', null=True, blank=True)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=50)
    unit_measurement = models.CharField(max_length=30)
    recipes = models.ManyToManyField(
        Recipe)

    def __str__(self):
        return self.name


# class MealTable(models.Model):
#     recipe_id = models.ForeignKey(Recipe, on_delete=models.CASCADE)
#     ingredient_id = models.ForeignKey(Ingredient, on_delete=models.CASCADE)


class DailyMeal(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='days')
    date = models.CharField(max_length=100, default=' ')
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='days', default=None)

    def __str__(self):
        return self.date
