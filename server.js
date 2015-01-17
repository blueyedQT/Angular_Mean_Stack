var express = require('express');
var config = require('./config/config.js');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mongoose = require('./config/mongoose');

var routes = require('./config/routes')(app);

app.set('port', process.env.PORT || 6789);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
