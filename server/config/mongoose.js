var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection error...'));

	db.once('open', function callback() {
		console.log('ezrental db opened');

		mongoose.connection.db.dropCollection('users');
		
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