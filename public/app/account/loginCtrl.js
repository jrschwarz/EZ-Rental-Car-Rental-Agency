angular.module('app').controller('loginCtrl', function($scope, $http, $location, AuthenticationService) {

	$scope.login = function(user) {

		AuthenticationService.login(user);
		$location.path('/admin');
		toastr.options = {
			"timeOut": "1000"
		};
		toastr.success('Successfully logged in', user);
	};
});