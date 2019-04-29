const express = require('express')
const route = express.Router()
const users = require('./users')
const todos = require('./todos')
const signin = require('../controllers/userController').signin
const signup = require('../controllers/userController').signup
const Authenticate = require('../middlewares/authenticate')

route.post('/signin', signin)
route.post('/signup', signup)

route.use('/users', users)
route.use('/todos', todos)

module.exports = route