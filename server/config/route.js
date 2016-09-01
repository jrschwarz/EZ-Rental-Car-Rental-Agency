var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function(app, config) {

	app.get('/', function(req, res) {
		res.sendFile(config.rootPath + '/public/index.html');
	});
	app.get('/reserve', function(req, res) {
		res.sendFile(config.rootPath + '/public/index.html');
	});
	app.get('/admin', function(req, res) {
		res.sendFile(config.rootPath + '/public/index.html');
	});


}