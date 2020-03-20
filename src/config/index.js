const express = require('express');
const public = require('../routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', public);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    res.status(500).send({ status: 'error', error: err });
});

module.exports = app;