var mongoose = require('mongoose');

var schema = mongoose.Schema ({
			startDate: Date,
			endDate: Date,
			owner:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
			vehicle: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'}],
			payment: {
				cardType: String,
				maskedNum: String,
				token: String
			}
		});

module.exports = mongoose.model('Reservation', schema);