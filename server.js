var express = require('express');
var bootstrap = require('./app/bootstrapper');

var app = express();
var port = process.env.PORT || 8080;

bootstrap(app);

app.listen(port);

console.log('Here is some magic on ', port, ' port!');