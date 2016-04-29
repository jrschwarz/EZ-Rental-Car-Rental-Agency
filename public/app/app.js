angular.module('app', ['ngResource', 'ngRoute', 'ngCookies', 'angularPayments']);

angular.module('app').config(function($windowProvider, $routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	var $window = $windowProvider.$get();
	$window.Stripe.setPublishableKey('pk_test_X46G23zw8ZvQd0Irpb2ZqyiS');

	$routeProvider
		//.when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
		.when('/', {
			templateUrl: 'app/account/login.html', 
			controller: 'loginCtrl',
			access: {
				requiredLogin: false,
				requiredAdmin: false 
			}
		})
		.when('/admin', {
			templateUrl: 'app/admin/admin.html', 
			controller: 'adminCtrl',
			access: {
				requiredLogin: true,
				requiredAdmin: true
			}
		})
		.when('/reserve', {
			templateUrl: 'app/reserve/reserve.html',
			controller: 'reserveCtrl',
			access: {
				requiredLogin: true,
				requiredAdmin: false
			}
		});
});

angular.module('app').run(function($rootScope, $location, AuthenticationService) {
	$rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
		
		if(nextRoute.access.requiredLogin && !AuthenticationService.isLoggedIn()) {
			$location.path('/');
		}

		if(nextRoute.originalPath == '/' && AuthenticationService.isLoggedIn()) {
			switch(AuthenticationService.getUser()) {
				case 'Customer': $location.path('/reserve');
					break;
				case 'Employee': 
				case 'Manager:': $location.path('/admin');
					break;
				default: $location.path('/reserve');
			}
		}

		if(nextRoute.access.requiredAdmin && !AuthenticationService.hasAdminRights()) {
			$location.path('/reserve');
		}
	});
});
