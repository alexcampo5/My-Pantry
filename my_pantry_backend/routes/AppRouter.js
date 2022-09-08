const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/users', UserRouter)
Router.use('/recipes', PostRouter)
Router.use('/ingredients', CommentRouter)
Router.use('/days', DaysRouter)
module.exports = Router
