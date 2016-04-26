var mongoose = require('mongoose');

var schema = mongoose.Schema ({
			role: String,
			firstname: String,
			lastname: String,
			age: Number,
			dlnum: String,
			email: String,
			phonenum: String,
		});

module.exports = mongoose.model('User', schema);
