const mongoose = require('mongoose')

const VolunteerSchema = new mongoose.Schema({
    volunteerName: {type: String, required: true},
    volunteerEmail: {type: String, unique: true, required: true},
    volunteerPassword: {type: String, required: true}
    volunteerKarma: {type: Double, required: true}
    volunteerBio: {type: String, required: true}
    volunteerRsvp: {type: [String]}
    volunteerAttend: {type: [String]}
}, {collection: 'VolunteerData'}

)


const Volunteer = mongoose.model('VolunteerData', VolunteerSchema)

module.exports = Volunteer


