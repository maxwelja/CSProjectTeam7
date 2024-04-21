const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)