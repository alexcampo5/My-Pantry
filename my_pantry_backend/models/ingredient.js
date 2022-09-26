'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      Ingredient.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Ingredient.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
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
