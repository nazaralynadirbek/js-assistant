const axios = require('axios');

// Models
const User = require('../models/User');

// Create or update
exports.modify = (request) => {
    axios.get(process.env.GRAPH_API + request.sender.id, {
        params: {
            fields: [
                'first_name',
                'last_name',
                'gender'
            ],
            access_token: process.env.ACCESS_TOKEN
        }
    }).then((response) => {
        User.findOneAndUpdate({
            //
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
