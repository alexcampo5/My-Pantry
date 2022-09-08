const { User, Recipe, Ingredient, Day } = require('../models')

const getAllDays = async (req, res) => {
  try {
    let days = await Day.findAll({
      include: [
        {
          model: User
        }
      ]
    })
    res.send(days)
  } catch (error) {
    throw error
  }
}

const getDayById = async (req, res) => {
  try {
    let day = await Day.findByPk(req.params.day_id, {
      include: [
        {
          model: User
        }
      ]
    })
    res.send(day)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllDays,
  getDayById
}
