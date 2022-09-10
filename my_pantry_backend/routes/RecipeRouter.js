const Router = require('express').Router()
const controller = require('../controllers/RecipeController')
//const middleware = require('../middleware')

Router.get('/:recipe_id', controller.getRecipeById)
Router.get('/', controller.getAllRecipes)
Router.post('/', controller.createRecipe)
Router.put('/:recipe_id', controller.updateRecipe)
Router.delete('/:recipe_id', controller.deleteRecipe)
Router.post('/meals/:recipe_id', controller.createMealCombo)

module.exports = Router
