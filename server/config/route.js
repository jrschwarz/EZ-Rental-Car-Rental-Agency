var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function(app) {
	app.get('/partials/*', function(req, res) {
		res.render('../../public/app' + req.params[0]);
	});

	app.all('/admin', function(req,res,next) {
		if(req.user && (req.user.userRole === "Manager" || req.user.userRole === "Employee")) next();
		else res.redirect('/');
	});

	app.get('/admin', function(req, res) {
		res.render('admin', {user: req.user.userRole});
	});

	app.get('/reserve', function(req, res) {
		if(!req.user) res.redirect('/');
		res.render('reserve', {user: req.user.userRole});
	});

	app.get('/*', function(req, res) {
		if(req.user) {
			switch(req.user.userRole) {
				case "Customer": res.redirect('/reserve');
					break;
				case "Employee":
				case "Manager": res.redirect('/admin');
					break;
				default: res.redirect('/');
			}
		}
		res.render('login');
	});

	app.post('/login', function(req, res) {
		req.login(req.body, function() {
			switch(req.body.userRole) {
				case "Customer": res.redirect('/reserve');
					break;
				case "Employee":
				case "Manager": res.redirect('/admin');
					break;
				default: res.redirect('/');
			}
		});
	});

	app.post('/logout', function(req, res) {
		req.logout();
		req.session.destroy(function(err) {
			res.send();
		});
	});
}