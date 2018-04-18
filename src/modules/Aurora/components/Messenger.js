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
            console.error('MESSENGER: getInformation method failed with status %s', error.response.status);

            reject(error);
        })
    })
}

// Send Status of Sender
const sendStatus = (status, recipient) => {
    return new Promise((resolve, reject) => {
        axios.post(process.end.GRAPH_API + 'me/messages', {
            params: {
                recipient     : recipient.id,
                sender_action : status,
                access_token  : process.env.ACCESS_TOKEN
            }
        })
    }).then((response) => {
        resolve();
    }).catch((error) => {
        console.error('MESSENGER: sendStatus method failed with status %s', error.response.status);

        reject(error);
    })
}

module.exports = {
    getInformation
}