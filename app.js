// Initialize application
// Set up configs
// Set up ports

const express = require('express');
const parser  = require('body-parser');

// Initialize application
const app = express().use(parser.json());

// Configuration
const router    = require('./src/router/router')(app);
const mongoose  = require('./src/config/config').mongoose(app);

// Port
app.listen(process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
           process.env.IP   || process.env.OPENSHIFT_NODEJS_IP   || '0.0.0.0');

module.exports = app;
