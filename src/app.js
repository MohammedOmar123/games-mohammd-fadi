const path = require('path');

const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
