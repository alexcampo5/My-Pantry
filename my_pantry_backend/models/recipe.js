'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Recipe.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      recipeName: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      directions: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
