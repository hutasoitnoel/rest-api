const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        let decoded = jwt.verify(req.headers.token, process.env.SECRET)
        req.decoded = decoded
        next()
    } catch (err) {
        res.status(500).json(err)
    }
}