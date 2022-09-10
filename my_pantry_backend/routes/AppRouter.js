const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const DayRouter = require('./DayRouter')
const IngredientRouter = require('./IngredientRouter')

Router.use('/users', UserRouter)
Router.use('/recipes', RecipeRouter)
Router.use('/ingredients', IngredientRouter)
Router.use('/days', DayRouter)
module.exports = Router
