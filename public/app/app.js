angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		//.when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
		.when('/', {templateUrl: 'app/account/login.html', controller: 'loginCtrl'})
		.when('/admin', {templateUrl: 'app/admin/admin.html', controller: 'adminCtrl'});
});
