const express = require('express')
const route = express.Router()
const UserController = require('../controllers/userController')

route.get('/', UserController.getAll)
route.get('/:id', UserController.getOne)
route.post('/', UserController.createOne)
route.delete('/:id', UserController.deleteOne)
route.put('/:id', UserController.updateOne)
route.post('/signin', UserController.signin)

module.exports = route