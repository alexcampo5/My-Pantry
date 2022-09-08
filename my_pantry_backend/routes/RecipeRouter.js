const Router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

Router.get('/:user_id', controller.getProfileByID)
Router.get('/', controller.getAllUser)
Router.post('/', controller.createProfile)
Router.put('/:user_id', controller.updateProfile)
Router.delete('/:user_id', controller.deleteProfile)

module.exports = Router
