const Router = require('express').Router()
const controller = require('../controllers/IngredientController')

Router.get('/:ingredient_id', controller.getIngredientById)
Router.get('/', controller.getAllIngredients)
Router.post('/', controller.createIngredient)
Router.put('/:ingredient_id', controller.updateIngredient)
Router.delete('/:ingredient_id', controller.deleteIngredient)

module.exports = Router
