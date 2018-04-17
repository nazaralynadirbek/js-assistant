const User = require('../controllers/User/User');

module.exports = (app) => {

    // POST
    app.post('/', (request, response) => {
        //
    })

    // GET
    app.get('/', (request, response) => {
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
