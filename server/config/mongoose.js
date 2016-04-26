var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection error...'));

	db.once('open', function callback() {
		console.log('ezrental db opened');

		mongoose.connection.db.dropCollection('users');
		mongoose.connection.db.dropCollection('vehicles');
		
		// Create Vehicle Collection
		var Vehicle = require('../models/vehicle.js');
		Vehicle.create({
			make: "Make",
			model: "Model 1",
			year: 2008,
			color: "Silver",
			access: "4-door",
			passengers: 4,
			price: 55,
			image: "/images/car1.png",
			reserved: true,
			owner: {
				userId: null
			}
		});
		Vehicle.create({
			make: "Make",
			model: "Model 2",
			year: 2009,
			color: "Black",
			access: "4-door",
			passengers: 4,
			price: 65,
			image: "/images/car2.png",
			reserved: true,
			owner: {
				userId: null
			}
		});
		Vehicle.create({
			make: "Make",
			model: "Model 3",
			year: 2010,
			color: "Teal",
			access: "4-door",
			passengers: 4,
			price: 60,
			image: "/images/car3.png",
			reserved: false,
			owner: {
				userId: null
			}
		});
		Vehicle.create({
			make: "Make",
			model: "Model 4",
			year: 2011,
			color: "White",
			access: "4-door",
			passengers: 4,
			price: 75,
			image: "/images/car4.png",
			reserved: false,
			owner: {
				userId: null
			}
		});
		Vehicle.create({
			make: "Make",
			model: "Model 5",
			year: 2010,
			color: "Dark Gray",
			access: "4-door",
			passengers: 4,
			price: 90,
			image: "/images/car5.png",
			reserved: false,
			owner: {
				userId: null
			}
		});
		

		var userSchema = mongoose.Schema ({
			role: String
		});

		var User = mongoose.model('User', userSchema);
		User.create({role: "Customer"});
		User.create({role: "Employee"});
		User.create({role: "Manager"});
		//console.log("User collections created.");
	});

	
}