const mongoose = require('mongoose');

// User
const User = mongoose.Schema({
    name    : String,
    surname : String,
    gender  : String
})

module.exports = mongoose.model('User', User);
