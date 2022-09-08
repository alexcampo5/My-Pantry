const Router = require('express').Router()
const UserRouter = require('./UserRouter')
Router.use('/users', UserRouter)
// Router.use('/recipes', PostRouter)
// Router.use('/ingredients', CommentRouter)
// Router.use('/days', DaysRouter)
module.exports = Router
