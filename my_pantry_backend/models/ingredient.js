'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      Ingredient.belongsToMany(models.Recipe, {
        foreignKey: 'ingredientIds',
        through: models.Meal,
        as: 'ingredient_list'
      })
    }
  }
  Ingredient.init(
    {
      name: DataTypes.STRING,
      units: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Ingredient',
      tableName: 'ingredients'
    }
  )
  return Ingredient
}
