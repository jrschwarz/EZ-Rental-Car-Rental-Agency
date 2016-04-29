var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection error...'));

	db.once('open', function callback() {
		console.log('ezrental db opened');

		mongoose.connection.db.dropCollection('users');
		mongoose.connection.db.dropCollection('vehicles');
		mongoose.connection.db.dropCollection('reservations');

		var User = require('../models/user');
		var user1 = new User({
			role: "Customer",
			firstname: "John",
			lastname: "Doe",
			age: 25,
			dlnum: "123-456-789",
			email: "jDoe123@gmail.com",
			phonenum: "0123456789"
		});
		user1.save(function(err, user) { user1.id = user.id});

		var user2 = new User({
			role: "Employee",
			firstname: "Mary",
			lastname: "Kay",
			age: 30,
			dlnum: "490-578-579",
			email: "mKay123@gmail.com",
			phonenum: "3869947389"
		});
		user2.save(function(err, user) { user2.id = user.id});

		var user3 = new User({
			role: "Manager",
			firstname: "Mike",
			lastname: "Geary",
			age: 45,
			dlnum: "856-927-386",
			email: "mGeary123@gmail.com",
			phonenum: "2958473889"
		});
		user3.save(function(err, user) { user3.id = user.id});
		
		// Create Vehicle Collection
		var Vehicle = require('../models/vehicle');
		Vehicle.create({
			name: "Make Model 1",
			make: "Make",
			model: "Model 1",
			year: 2008,
			color: "Silver",
			access: "4-door",
			passengers: 4,
			price: 55,
			image: "/images/car1.png",
			owner: user1.id
		});
		Vehicle.create({
			name: "Make Model 2",
			make: "Make",
			model: "Model 2",
			year: 2009,
			color: "Black",
			access: "4-door",
			passengers: 4,
			price: 65,
			image: "/images/car2.png",
			owner: user2.id
		});
		Vehicle.create({
			name: "Make Model 3",
			make: "Make",
			model: "Model 3",
			year: 2010,
			color: "Teal",
			access: "4-door",
			passengers: 4,
			price: 60,
			image: "/images/car3.png",
			owner: null
		});
		Vehicle.create({
			name: "Make Model 4",
			make: "Make",
			model: "Model 4",
			year: 2011,
			color: "White",
			access: "4-door",
			passengers: 4,
			price: 75,
			image: "/images/car4.png",
			owner: null
		});
		Vehicle.create({
			name: "Make Model 5",
			make: "Make",
			model: "Model 5",
			year: 2010,
			color: "Dark Gray",
			access: "4-door",
			passengers: 4,
			price: 90,
			image: "/images/car5.png",
			owner: user3.id
		});

	});

	
}