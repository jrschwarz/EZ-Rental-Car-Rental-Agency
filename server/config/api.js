var mongoose = require('mongoose');

module.exports = function(app) {

	var Vehicle = require('../models/vehicle');
	var Reservation = require('../models/reservation');
	var User = require('../models/user');

	app.get('/api/vehicles', function(req, res) {

		Vehicle.find({})
			.exec(function(err, vehicles) {
				res.json(vehicles);
			});
	});

	app.get('/api/vehicles-reserved', function(req, res) {

		Reservation.find({})
				.populate('owner')
				.populate('vehicle')
				.exec(function(err, reservations) {
					res.json(reservations);

				});
	});

	app.get('/api/vehicles-reserved/:id', function(req,res) {
		Reservation.find({'owner': req.params.id})
				.populate('vehicle')
				.exec(function(err, reservations) {
					res.json(reservations);
				});
	});

	app.get('/api/vehicles-avail', function(req,res) {

		Vehicle.find({'owner':null}, function(err, vehicles) {
			res.json(vehicles);
		});
	});

	
	app.get('/api/user/:role', function(req, res) {
		User.findOne({'role': req.params.role}, function(err, user) {
			res.json(user);
		});
	});

	
	app.post('/api/reservation', function(req, res) {
		
		Reservation.create({
			owner: req.body.user._id,
			vehicle: req.body.vehicle._id,
			startDate: req.body.dates.fromDate,
			endDate: req.body.dates.toDate,
			payment: {
				cardType: req.body.payment.card.brand,
				maskedNum: "**** **** **** " + req.body.payment.card.last4,
				token: req.body.payment.id
			}
		}, function(err, reservation) {

			Vehicle.update({_id: req.body.vehicle._id}, {
				owner: req.body.user._id
			}, function(err, vehicle) { 
				res.end(); 
			});
		});
			
	});
};