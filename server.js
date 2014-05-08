var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/test', function(req,res){
	res.send('Just a little magic!');
});

app.listen(port);
console.log('Here is some magic on ', port, ' port!');