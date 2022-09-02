from re import T
from rest_framework import serializers
from .models import User, Ingredient, Recipe, DailyMeal


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    ingredients = serializers.HyperlinkedRelatedField(
        view_name='ingredient-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Recipe
        fields = ('id', 'image_url', 'directions', 'ingredients')


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    recipes = serializers.HyperlinkedRelatedField(
        view_name='recipe-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Ingredient
        fields = ('id', 'price_per_unit', 'unit_measurement', 'recipes')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    days = serializers.HyperlinkedRelatedField(
        view_name='daily-meal-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'days')


class DailyMealSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user-detail',
        read_only=True
    ),
    recipes = serializers.HyperlinkedRelatedField(
        view_name='recipe-detail',
        read_only=True
    )

    class Meta:
        model = DailyMeal
        fields = ('id', 'user', 'date', 'recipes')
