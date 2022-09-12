'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate(models) {
      Day.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Day.init(
    {
      date: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Day',
      tableName: 'days'
    }
  )
  return Day
}
