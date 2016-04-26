var mongoose = require('mongoose');

var schema = mongoose.Schema ({
			make: String,
			model: String,
			year: Number,
			color: String,
			image: String,
			access: String,
			passengers: Number,
			price: Number,
			ownder: {
				userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
			}
		});

module.exports = mongoose.model('Vehicle', schema);