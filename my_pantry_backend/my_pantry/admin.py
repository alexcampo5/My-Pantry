from django.contrib import admin
from .models import User, Ingredient, Recipe, DailyMeal
# Register your models here.

admin.site.register(User)
admin.site.register(Ingredient)
admin.site.register(Recipe)
admin.site.register(DailyMeal)
