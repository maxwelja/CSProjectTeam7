// we can just use the one model.js file for this part
const {User /* insert model name here separated by commas */} = require('./model');
const mongoose = require('mongoose');

// read all users
const getAllUsers = async (req,res) => {
    const users = await User.find({}).sort({name:1});
    if (!users) {
        return res.status(404).json({error: "Nothing there, boss."});
    }
    return res.status(200).json(users);
};

// read one user by mongo document id
const getOneUser = async (req,res) => {
    const {id} = req.params;

    // error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No good, boss."});
    }

    // perform the search based on ID
    const user = await User.findById(id);

    // error
    if (!user) {
        return res.status(404).json({error: "Nothing there, boss."});
    }

    // success state
    return res.status(200).json(user);
};

// a post request
// I'm still shaky on this one, but I know it works
const postUser = async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        
        if (result) {
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        res.send("Something Went Wrong");
    }
};

// export functions by name
module.exports = { getAllUsers, getOneUser, postUser };