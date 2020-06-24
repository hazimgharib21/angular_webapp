var express = require("express");
var path = require("path");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var openweathermap = require('./routes/openweathermap');
var weatherstack = require('./routes/weatherstack');
var quoteoftheday = require('./routes/quoteoftheday');
var programmingquote = require('./routes/programmingquote');

var app = express();

const _port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/openweathermap', openweathermap);
app.use('/api/v1/weatherstack', weatherstack);
app.use('/api/v1/quoteoftheday', quoteoftheday);
app.use('/api/v1/programmingquote', programmingquote);

app.listen(_port, '0.0.0.0', function(){
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
})