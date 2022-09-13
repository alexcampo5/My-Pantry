const { User, Recipe, Ingredient, Day } = require('../models')

const getAllIngredients = async (req, res) => {
  try {
    let ingredients = await Ingredient.findAll({
      include: [
        {
          model: Recipe,
          as: 'ingredient_list'
        }
      ]
    })
    res.send(ingredients)
  } catch (error) {
    throw error
  }
}

const getIngredientById = async (req, res) => {
  try {
    let ingredient = await Ingredient.findByPk(req.params.ingredient_id, {
      include: [
        {
          model: Recipe,
          as: 'ingredient_list'
        }
      ]
    })
    res.send(ingredient)
  } catch (error) {
    throw error
  }
}

const createIngredient = async (req, res) => {
  try {
    let newIngredient = await Ingredient.create(req.body)
    res.send(newIngredient)
  } catch (error) {
    throw error
  }
}

const updateIngredient = async (req, res) => {
  try {
    let updatedIngredient = await Ingredient.update(req.body, {
      where: { id: req.params.ingredient_id },
      returning: true
    })
    res.send(updatedIngredient)
  } catch (error) {
    throw error
  }
}

const deleteIngredient = async (req, res) => {
  try {
    let deletedIngredient = await Ingredient.destroy({
      where: { id: req.params.ingredient_id }
    })
    res.send(deletedIngredient)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllIngredients,
  createIngredient,
  getIngredientById,
  updateIngredient,
  deleteIngredient
}
