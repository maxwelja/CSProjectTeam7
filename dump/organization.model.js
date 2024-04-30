const mongoose = require('mongoose')

const OrganizationSchema = new mongoose.Schema({
    orgName: {type: String, required: true},
    orgEmail: {type: String, unique: true, required: true},
    orgLink: {type:String, unique:true, required:true},
    orgPassword: {type: String, required: true}
    orgHosted: {type: [String]}
    orgCollaborate: {type: [String]}
}, {collection: 'OrganizationData'}

)


const Organization = mongoose.model('Organization', OrganizationSchema)

module.exports = Organization
