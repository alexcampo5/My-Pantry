'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsToMany(models.Ingredient, {
        foreignKey: 'id',
        through: models.Recipe_Ingredient,
        as: 'recipe_list'
      })
      Recipe.belongsTo(models.Day, { foreignKey: 'dayId' })
    }
  }
  Recipe.init(
    {
      recipeName: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      directions: DataTypes.STRING,
      dayId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'days',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
