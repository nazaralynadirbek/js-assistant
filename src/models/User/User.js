const mongoose = require('mongoose');

// User
const User = mongoose.Schema({
    id      : String,
    name    : String,
    surname : String,
    gender  : String
})

module.exports = mongoose.model('User', User);
