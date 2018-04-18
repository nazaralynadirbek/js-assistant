const User    = require('../../storage/controllers/User');
const Natural = require('../Natural/Natural');

// Components
const Messenger = require('./components/Messenger');

const run = (message) => {

    // Status: Readed
    Messenger.sendStatus('mark_seen', message.sender);

    // If payload
    // Get user information and create new User
    if (message.postback != undefined &&
        message.postback.payload === 'GET_STARTED_PAYLOAD') {

        Messenger.getInformation(message.sender).then((response) => {
            User.modify(response);
        });
    }

    // If message
    // Send to Natural
    if (message.message != undefined) {

        // Status: Typing
        Messenger.sendStatus('typing_on', message.sender);

        Natural.run().then(() => {

            // Status: Typed
            Messenger.sendStatus('typing_off', message.sender);
        }).catch((error) => {
            //
        })
    }
}

module.exports = {
    run
}
