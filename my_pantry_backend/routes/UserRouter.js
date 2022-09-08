const Router = require('express').Router()
const controller = require('../controllers/UserController')
//const middleware = require('../middleware')

Router.get('/:user_id', controller.getUserById)
Router.get('/', controller.getAllUsers)
Router.post('/', controller.createUser)
Router.put('/:user_id', controller.updateUser)
Router.delete('/:user_id', controller.deleteUser)

module.exports = Router
