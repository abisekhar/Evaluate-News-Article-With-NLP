const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.get('/sentiment', function (req, res) {
    textapi.sentiment({
        'url': req.query.url,
        'mode': 'document'
    }, function (error, response) {
        if (error === null) {
            res.send(response);
        }
    });
});

const port = 4200;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
