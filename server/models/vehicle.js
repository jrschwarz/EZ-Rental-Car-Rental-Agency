var mongoose = require('mongoose');

var schema = mongoose.Schema ({
			name: String,
			make: String,
			model: String,
			year: Number,
			color: String,
			image: String,
			access: String,
			passengers: Number,
			price: Number,
			owner: {
				userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
			}
		});

module.exports = mongoose.model('Vehicle', schema);