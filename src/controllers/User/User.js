const User = require('../../models/User/User');

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
            console.error('DATABASE: Create method failed');

            return;
        }
    })
}

// Delete
exports.delete = (data) => {
    //
}
