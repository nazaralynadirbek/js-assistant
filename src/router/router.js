const User = require('../controllers/User');
const Query = require('../controllers/Query');

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

                // Save into database
                Query.create(message)

                // Logging
                console.info('POST: Message received: %s', JSON.stringify(message));
            })

            // Responds with '200 OK'
            response.sendStatus(200)
        } else {

            // Responds with '404 Not Found'
            response.sendStatus(404)
        }
    })

    // GET
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
