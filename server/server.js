// setup express app
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const eventRoutes = require('./routes/events')

// middleware (framework between React and Node)
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/events', eventRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for commands
        app.listen(process.env.PORT, () => {
            console.log("Server running on port", process.env.PORT + "!")
        })
    })
    .catch((error) => {
        console.log(error)
    })
