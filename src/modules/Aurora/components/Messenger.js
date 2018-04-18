const axios = require('axios');

// Retrieve information
const getInformation = (sender) => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.GRAPH_API + sender.id, {
            params: {
                fields: [
                    'id',
                    'first_name',
                    'last_name',
                    'gender'
                ].join(','),
                access_token: process.env.ACCESS_TOKEN
            }
        }).then((response) => {
            console.info('MESSENGER: getInformation method successfully ended');

            resolve(response);
        }).catch((error) => {
            console.warn('MESSENGER: getInformation method failed with status %s', error.response.status);

            reject(error);
        })
    })
}

// Send Status
const sendStatus = (status, recipient) => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.GRAPH_API + 'me/messages?access_token=' + process.env.ACCESS_TOKEN, {
            recipient     : recipient,
            sender_action : status,
        }).then((response) => {
            resolve();
        }).catch((error) => {
            console.warn('MESSENGER: sendStatus method failed with status %s', error.response.status);

            reject(error);
        })
    })
}

// Send Message
const sendMessage = (message, recipient) => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.GRAPH_API + 'me/messages?access_token=' + process.env.ACCESS_TOKEN, message).then((response) => {
            resolve();
        }).catch((error) => {
            console.warn('MESSENGER: sendMessage method failed with status %s', error.response.status);

            reject();
        })
    })
}

module.exports = {
    sendStatus,
    sendMessage,
    getInformation
}
