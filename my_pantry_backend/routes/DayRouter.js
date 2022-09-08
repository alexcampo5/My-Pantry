const Router = require('express').Router()
const controller = require('../controllers/DayController')
//const middleware = require('../middleware')

Router.get('/:day_id', controller.getDayById)
Router.get('/', controller.getAllDays)
Router.post('/', controller.createProfile)
Router.put('/:day_id', controller.updateProfile)
Router.delete('/:day_id', controller.deleteProfile)

module.exports = Router
