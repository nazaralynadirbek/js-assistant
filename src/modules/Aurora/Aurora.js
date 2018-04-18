const User    = require('../storage/controllers/User');
const Natural = require('../Natural/Natural');

// Components
const Messanger = require('./components/Messanger');

const run = (message) => {

    // If payload
    // Get user information and create new User
    if (message.postback != undefined &&
        message.postback.payload === 'GET_STARTED_PAYLOAD') {

        Messanger.getInformation(message.sender).then((response) => {
            User.modify(response);
        });
    }

    // If message
    // Send to Natural
    if (message.message != undefined) {
        Natural.run().then(() => {
            //
        }).catch((error) => {
            //
        })
    }
}

module.exports = {
    run
}
