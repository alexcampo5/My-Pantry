'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe_Ingredient extends Model {
    static associate(models) {}
  }
  Recipe_Ingredient.init(
    {
      recipeId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'recipes',
          key: 'id'
        }
      },
      ingredientId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Recipe_Ingredient',
      tableName: 'recipe_ingredients'
    }
  )
  return Recipe_Ingredient
}
