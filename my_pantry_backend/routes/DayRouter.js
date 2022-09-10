const Router = require('express').Router()
const controller = require('../controllers/DayController')
//const middleware = require('../middleware')

Router.get('/:day_id', controller.getDayById)
Router.get('/', controller.getAllDays)
Router.post('/', controller.createDay)
Router.put('/:day_id', controller.updateDay)
Router.delete('/:day_id', controller.deleteDay)

module.exports = Router
