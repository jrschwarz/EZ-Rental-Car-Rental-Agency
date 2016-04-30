var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection error...'));

	db.once('open', function callback() {
		console.log('ezrental db opened');

	// 	mongoose.connection.db.dropCollection('users');
	// 	mongoose.connection.db.dropCollection('vehicles');
	// 	mongoose.connection.db.dropCollection('reservations');

	// 	var User = require('../models/user');
	// 	var user1 = new User({
	// 		role: "Customer",
	// 		firstname: "John",
	// 		lastname: "Doe",
	// 		age: 25,
	// 		dlnum: "123-456-789",
	// 		email: "jDoe123@gmail.com",
	// 		phonenum: "0123456789"
	// 	});
	// 	user1.save(function(err, user) { user1.id = user.id});

	// 	var user2 = new User({
	// 		role: "Employee",
	// 		firstname: "Mary",
	// 		lastname: "Kay",
	// 		age: 30,
	// 		dlnum: "490-578-579",
	// 		email: "mKay123@gmail.com",
	// 		phonenum: "3869947389"
	// 	});
	// 	user2.save(function(err, user) { user2.id = user.id});

	// 	var user3 = new User({
	// 		role: "Manager",
	// 		firstname: "Mike",
	// 		lastname: "Geary",
	// 		age: 45,
	// 		dlnum: "856-927-386",
	// 		email: "mGeary123@gmail.com",
	// 		phonenum: "2958473889"
	// 	});
	// 	user3.save(function(err, user) { user3.id = user.id});
		
	// 	// Create Vehicle Collection
	// 	var Vehicle = require('../models/vehicle');
	// 	Vehicle.create({
	// 		name: "Make Model 1",
	// 		make: "Make",
	// 		model: "Model 1",
	// 		year: 2010,
	// 		color: "Silver",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 55,
	// 		image: "/images/car1.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 2",
	// 		make: "Make",
	// 		model: "Model 2",
	// 		year: 2010,
	// 		color: "Black",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 65,
	// 		image: "/images/car2.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 3",
	// 		make: "Make",
	// 		model: "Model 3",
	// 		year: 2010,
	// 		color: "Teal",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 60,
	// 		image: "/images/car3.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 4",
	// 		make: "Make",
	// 		model: "Model 4",
	// 		year: 2011,
	// 		color: "White",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 75,
	// 		image: "/images/car4.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 5",
	// 		make: "Make",
	// 		model: "Model 5",
	// 		year: 2010,
	// 		color: "Dark Gray",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 90,
	// 		image: "/images/car5.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 6",
	// 		make: "Make",
	// 		model: "Model 6",
	// 		year: 2014,
	// 		color: "Red",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 85,
	// 		image: "/images/car6.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 7",
	// 		make: "Make",
	// 		model: "Model 7",
	// 		year: 2014,
	// 		color: "White",
	// 		access: "2-door",
	// 		passengers: 4,
	// 		price: 140,
	// 		image: "/images/car7.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 8",
	// 		make: "Make",
	// 		model: "Model 8",
	// 		year: 2014,
	// 		color: "White",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 100,
	// 		image: "/images/car8.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 9",
	// 		make: "Make",
	// 		model: "Model 9",
	// 		year: 2015,
	// 		color: "Yellow",
	// 		access: "2-door",
	// 		passengers: 4,
	// 		price: 120,
	// 		image: "/images/car9.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 10",
	// 		make: "Make",
	// 		model: "Model 10",
	// 		year: 2015,
	// 		color: "Silver",
	// 		access: "2-door",
	// 		passengers: 4,
	// 		price: 150,
	// 		image: "/images/car10.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 11",
	// 		make: "Make",
	// 		model: "Model 11",
	// 		year: 2013,
	// 		color: "Red",
	// 		access: "2-door",
	// 		passengers: 2,
	// 		price: 170,
	// 		image: "/images/car11.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 12",
	// 		make: "Make",
	// 		model: "Model 12",
	// 		year: 2015,
	// 		color: "White",
	// 		access: "4-door",
	// 		passengers: 5,
	// 		price: 110,
	// 		image: "/images/car12.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 13",
	// 		make: "Make",
	// 		model: "Model 13",
	// 		year: 2015,
	// 		color: "Red",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 90,
	// 		image: "/images/car13.png",
	// 		owner: null
	// 	});

	// 	Vehicle.create({
	// 		name: "Make Model 14",
	// 		make: "Make",
	// 		model: "Model 14",
	// 		year: 2015,
	// 		color: "Dark Blue",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 150,
	// 		image: "/images/car14.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 15",
	// 		make: "Make",
	// 		model: "Model 15",
	// 		year: 2014,
	// 		color: "Red",
	// 		access: "4-door",
	// 		passengers: 4,
	// 		price: 140,
	// 		image: "/images/car15.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 16",
	// 		make: "Make",
	// 		model: "Model 16",
	// 		year: 2014,
	// 		color: "Black",
	// 		access: "2-door",
	// 		passengers: 4,
	// 		price: 125,
	// 		image: "/images/car16.png",
	// 		owner: null
	// 	});
	// 	Vehicle.create({
	// 		name: "Make Model 17",
	// 		make: "Make",
	// 		model: "Model 17",
	// 		year: 2012,
	// 		color: "Silver",
	// 		access: "4-door",
	// 		passengers: 5,
	// 		price: 150,
	// 		image: "/images/car17.png",
	// 		owner: null
	// 	});
	// });

	
}