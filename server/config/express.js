var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session')
	passport = require('passport');


module.exports = function(app, config) {
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({secret: 'ezrental', resave: false, saveUninitialized: false}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(bodyParser.json());
	app.use(express.static(config.rootPath + '/public'));

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});
};