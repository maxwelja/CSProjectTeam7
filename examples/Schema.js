// import mongoose to handle everything for you
const mongoose = require('mongoose');

// make a schema for users collection and store to variable
// Design for the "shape" of the document in the database
const UserSchema = new mongoose.Schema({
    name: {
        type: String,    // must specify the data type of field
        required: true,  // returns error if field is missing
    },
    email: {
        type: String,
        required: true,
        unique: true,    // I believe this prevents duplicates (optional)
    },
    date: {              // Should just copy the date field to every schema for debugging
        type: Date,
        default: Date.now,
    },
});

// builds a model from the schema variable and stores to new variable
const user = mongoose.model('users', UserSchema);

// then just export the model variable 
module.exports = user;
