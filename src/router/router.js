const User   = require('../storage/controllers/User');
const Aurora = require('../modules/Aurora/Aurora');

module.exports = (app) => {

    // POST
    app.post('/webhook', (request, response) => {
        let body = request.body;

        if (body.object === 'page') {

            // Iteration
            body.entry.forEach((entry) => {

                // Get messages
                // entry.messaging is array with only one object
                let message = entry.messaging[0];

                // If payload
                // Get user information and create new User
                if (message.postback != undefined &&
                    message.postback.payload === 'GET_STARTED_PAYLOAD') {

                    User.modify(message);
                }

                // Send into Bot
                if (message.message != undefined) {
                    Aurora.run(message.message);
                }
            })

            // Logger
            console.info('POST: 200 OK')

            // Responds with '200 OK'
            response.sendStatus(200)
        } else {

            // Logger
            console.warn('POST: 404 Not Found')

            // Responds with '404 Not Found'
            response.sendStatus(404)
        }
    })

    app.get('/webhook', (request, response) => {
        let mode      = request.query['hub.mode'];
        let token     = request.query['hub.verify_token'];
        let challenge = request.query['hub.challenge'];

        if (mode && token) {
            if (mode === 'subscribe' && token == process.env.VERIFY_TOKEN) {

                // Logging
                console.info('GET: Webhook verification successful');

                // Responds with the challenge token from the request
                response.status(200).send(challenge);
            } else {

                // Logging
                console.error('GET: Webhook verification failed');

                // Responds with '403 Forbidden'
                response.sendStatus(403);
            }
        }
    })
}
