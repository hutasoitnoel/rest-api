const { User, Todo } = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);
const jwt = require('jsonwebtoken')

class UserController {
    static getAll(req, res) {
        User.findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getOne(req, res) {
        User.findByPk(req.params.id)
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(400).json('User not found')
            })
    }

    static createOne(req, res) {
        const { username, password } = req.body
        const hash = bcrypt.hashSync(password, salt)
        User.create({
            username: username,
            password: hash
        })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteOne(req, res) {
        User.findByPk(req.params.id)
            .then(user => {
                user.destroy()
            })
            .then(deletedCount => {
                res.status(200).json('delete success')
            })
            .catch(err => {
                res.status(400).json('User not found')
            })
    }

    static updateOne(req, res) {
        const { username, password } = req.body
        const hash = bcrypt.hashSync(password, salt)
        User.findByPk(req.params.id)
            .then(user => {
                user.update({ username: username, password: hash })
            })
            .then(updated => {
                res.status(200).json('Update succes')
            })
            .catch(err => {
                res.status(400).json('User not found')
            })
    }

    static signin(req, res) {
        const { username, password } = req.body
        User.findOne({
            where: { username }
        })
            .then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = jwt.sign({ id: user.id, username: user.username }
                        , process.env.SECRET, { expiresIn: '1 day' })
                    res.status(200).json({ token })
                } else {
                    res.status(500).json('Invalid password')
                }
            })
            .catch(err => {
                res.status(500).json(`Invalid username`)
            })
    }

    static signup(req, res) {
        const { username, password } = req.body
        User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController