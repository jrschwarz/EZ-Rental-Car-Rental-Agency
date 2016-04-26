angular.module('app').controller('navbarCtrl', function($scope, $window, $http, $location, AuthenticationService) {

	$scope.goHome = function() {
		$window.location.href = "/";
	};

	$scope.isAdmin = function() {
		return AuthenticationService.hasAdminRights();
	};

	$scope.isLoggedIn = function() {
		if(AuthenticationService.getUser() != undefined) return true;
		else return false;
	};

	$scope.logout = function() {
		AuthenticationService.logout();
		$location.path('/');
		toastr.options = {
			"timeOut": "1000"
		};
		toastr.success('Successfully logged out');
	};

});