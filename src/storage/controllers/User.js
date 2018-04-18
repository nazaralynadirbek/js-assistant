const axios = require('axios');
const User  = require('../models/User');

// Create or update
exports.modify = (request) => {
    axios.get(process.env.GRAPH_API + request.sender.id, {
        params: {
            fields: [
                'first_name',
                'last_name',
                'gender'
            ].join(','),
            access_token: process.env.ACCESS_TOKEN
        }
    }).then((response) => {

        // Logger
        console.info('USER: Information successfully retrieved');

        // Create record
        User.findOneAndUpdate({
            id      : request.sender.id,
            name    : response.first_name,
            surname : response.last_name,
            gender  : response.gender
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
    }).catch((error) => {
        console.error('USER: Modify function failed with status: %s', error.response.status)
    })
}

// Delete
exports.delete = (data) => {
    //
}
