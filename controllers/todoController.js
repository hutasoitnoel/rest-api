const { User, Todo } = require('../models')

class TodoController {
    static getAll(req, res) {
        Todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getOne(req, res) {
        Todo.findByPk(req.params.id)
            .then(todo => {
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createOne(req, res) {
        const { title, description, user_id } = req.body
        Todo.create({
            title, description, user_id: req.decoded.id
        })
            .then(todo => {
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteOne(req, res) {
        Todo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(deleteCount => {
                res.status(200).json('Succesfully deleted!')
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static updateOne(req, res) {
        const { title, description } = req.body
        Todo.findByPk(req.params.id)
            .then(todo => {
                todo.update({ title, description })
            })
            .then(todo => {
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(400).json('Todo not found')
            })
    }

    static updateOnePut(req, res) {
        const { title, description } = req.body
        if (!title || !description) res.status(400).json('Please fill title and description')
        else {
            Todo.findByPk(req.params.id)
                .then(todo => {
                    todo.update({ title, description })
                })
                .then(todo => {
                    res.status(200).json(todo)
                })
                .catch(err => {
                    res.status(400).json('Todo not found')
                })
        }
    }
}

module.exports = TodoController