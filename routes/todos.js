const express = require('express')
const route = express.Router()
const TodoController = require('../controllers/todoController')
const Authenticate = require('../middlewares/authenticate')
const Authorize = require('../middlewares/authorize')

route.get('/', TodoController.getAll)

route.use(Authenticate)


route.get('/:id', Authorize, TodoController.getOne)
route.post('/', TodoController.createOne)
route.delete('/:id', Authorize, TodoController.deleteOne)
route.patch('/:id', Authorize, TodoController.updateOne)
route.put('/:id', Authorize, TodoController.updateOnePut)

module.exports = route