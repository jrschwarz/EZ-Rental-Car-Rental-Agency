var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function(app, config) {

	app.get('/', function(req, res) {
		res.sendFile(config.rootPath + '/public/index.html');
	});
}