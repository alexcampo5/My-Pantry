const { User, Recipe, Ingredient, Day } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const createUser = async (req, res) => {
  try {
    let userCreated = await User.create(req.body)
    res.send(userCreated)
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    let updatedUser = await User.update(req.body, {
      where: { id: req.params.user_id },
      returning: true
    })
    res.send(updatedProfile)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let deletedUser = await User.destroy({
      where: { id: req.params.user_id }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById
}
