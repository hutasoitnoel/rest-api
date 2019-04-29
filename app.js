const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const routes = require('./routes/routes')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
    console.log(`You are listening to ${port} FM`);
})