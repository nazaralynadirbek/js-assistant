const axios = require('axios');
const User  = require('../models/User');

// Create or update
exports.modify = (response) => {
    User.findOneAndUpdate({
        id      : response.data.id,
        name    : response.data.first_name,
        surname : response.data.last_name,
        gender  : response.data.gender
    }, {
        expire: new Date()
    }, {
        upsert              : true,
        new                 : true,
        setDefaultsOnInsert : true
    }, (error, response) => {
        if (error) {
            console.error('USER: Modify function failed');

            return;
        }

        console.info('USER: Modify function successfully ended');
    })
}

// Delete
exports.delete = (data) => {
    //
}
