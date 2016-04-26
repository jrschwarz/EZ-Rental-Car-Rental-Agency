var mongoose = require('mongoose');

module.exports = function(app) {

	//Vehicle APIs
	var Vehicle = require('../models/vehicle');

	app.get('/api/vehicles', function(req, res) {

		Vehicle.find({}, function(err, vehicles) {
			res.json(vehicles);
		});
	});

	var User = require('../models/user');

	app.get('/api/user/:role', function(req, res) {
		User.findOne({'role': req.params.role}, function(err, user) {
			res.json(user);
		});
	});
};