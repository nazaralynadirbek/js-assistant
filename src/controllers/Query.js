const Query = require('../../models/Query');

// Create
exports.create = (request) => {
    Query.create({
        id        : request.sender.id,
        timestamp : request.timestamp,
        message   : request.message
    }, (error, response) => {
        if (error) {
            console.error('QUERY: Create method failed');

            return;
        }

        console.info('QUERY: New record added');
    })
}

// Delete
exports.delete = (data) => {
    //
}
