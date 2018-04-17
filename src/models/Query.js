const mongoose = require('mongoose');

// User
const Query = mongoose.Schema({
    id        : String,
    timestamp : Date,
    message   : Object
})

module.exports = mongoose.model('Query', Query);
