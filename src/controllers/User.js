const User = require('../models/User');

// Create or update
exports.modify = (request) => {
    User.findOneAndUpdate(request, {
        expire: new Date()
    }, {
        upsert              : true,
        new                 : true,
        setDefaultsOnInsert : true
    }, (error, response) => {
        if (error) {
            console.error('USER: Modify method failed');

            return;
        }

        console.info('USER: New record added');
    })
}

// Delete
exports.delete = (data) => {
    //
}
