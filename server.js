var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// mongoose.connect('mongodb://localhost/carrentalagency');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error...'));
// db.once('open', function callback() {
// 	console.log('carrentalagency db opened');
// });

app.get('*', function(req, res) {
	res.render('admin');
});

var port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '...');