var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/ezrental',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://admin:ezrental@ds021741.mlab.com:21741/ezrental',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}
