var mongoose = require('mongoose');

module.exports = function(app) {

	//Vehicle APIs
	var Vehicle = require('../models/vehicle');

	app.get('/api/vehicles', function(req, res) {

		Vehicle.find({}, function(err, vehicles) {
			res.json(vehicles);
		});
	});

	app.get('/api/vehicles-reserved', function(req, res) {

		Vehicle.find({'owner.userId': {$ne:null}}, function(err, vehicles) {
			res.json(vehicles);
		});
	});

	var User = require('../models/user');

	app.get('/api/user/:role', function(req, res) {
		User.findOne({'role': req.params.role}, function(err, user) {
			res.json(user);
		});
	});

	var Reservation = require('../models/reservation');

	app.post('/api/reservation', function(req, res) {
		
		Reservation.create({
			owner: {
				userId: req.body.user._id
			},
			vehicle: {
				vehicleId: req.body.vehicle._id
			},
			startDate: req.body.dates.fromDate,
			endDate: req.body.dates.toDate,
			payment: {
				cardType: req.body.payment.card.brand,
				maskedNum: "**** **** **** " + req.body.payment.card.last4,
				token: req.body.payment.id
			}
		});

		Vehicle.update({_id: req.body.vehicle._id}, {
			owner: {
				userId: req.body.user._id
			}
		}, function(err, vehicle) {console.log(vehicle);});
		res.end();	
	});
};