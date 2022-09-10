const {
  User,
  Recipe,
  Ingredient,
  Day,
  Recipe_Ingredient
} = require('../models')

const getAllRecipes = async (req, res) => {
  try {
    let recipes = await Recipe.findAll({
      include: [
        {
          model: Ingredient,
          as: 'recipe_list'
        }
      ]
    })
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const getRecipeById = async (req, res) => {
  try {
    let recipe = await Recipe.findByPk(req.params.recipe_id, {
      include: [
        {
          model: Ingredient,
          as: 'recipe_list'
        }
      ]
    })
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const createMealCombo = async (req, res) => {
  try {
    console.log(req.ingredientId)
    let meal = await Recipe_Ingredient.create({
      recipeId: req.params.recipe_id,
      ingredientId: req.body
    })
    res.send(meal)
  } catch (error) {
    throw error
  }
}

const createRecipe = async (req, res) => {
  try {
    let newRecipe = await Recipe.create(req.body)
    res.send(newRecipe)
  } catch (error) {
    throw error
  }
}

const updateRecipe = async (req, res) => {
  try {
    let updatedRecipe = await Recipe.update(req.body, {
      where: { id: req.params.recipe_id },
      returning: true
    })
    res.send(updatedRecipe)
  } catch (error) {
    throw error
  }
}

const deleteRecipe = async (req, res) => {
  try {
    let deletedRecipe = await Recipe.destroy({
      where: { id: req.params.recipe_id }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  createMealCombo
}
