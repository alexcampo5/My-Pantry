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

const createDay = async (req, res) => {
  try {
    let day = await Day.create(req.body)
    res.send(day)
  } catch (error) {
    throw error
  }
}

const updateDay = async (req, res) => {
  try {
    let updatedDay = await Day.update(req.body, {
      where: { id: req.params.day_id },
      returning: true
    })
    res.send(updatedDay)
  } catch (error) {
    throw error
  }
}

const deleteDay = async (req, res) => {
  try {
    let deletedDay = await Day.destroy({
      where: { id: req.params.day_id }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllDays,
  getDayById,
  createDay,
  updateDay,
  deleteDay
}
