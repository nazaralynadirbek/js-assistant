const mongoose = require('mongoose');

// Mongoose
exports.mongoose = (app) => {
    mongoose.connect(process.env.DATABASE).then(() => {
        console.info('DATABASE: Connection successful')
    }).catch((error) => {
        console.error('DATABASE: Connection failed');
    })
}
