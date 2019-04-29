const {User , Todo} = require('../models')

module.exports = (req, res, next) => {
    Todo.findByPk(req.params.id)
    .then(todo =>{
        if(todo.user_id == req.decoded.id) next()
        else res.status(401).json(`${req.decoded.username} is not authorized`)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
}