angular.module('app').controller('navbarCtrl', function($scope, $window, $http, $location) {

	$scope.isLoggedIn = true;

	$scope.goHome = function() {
		$window.location.href = "/";
	};

	logoutSuccess = function() {
		$window.location.href = "/";
	};

	logoutError = function() {
		toastr.failure("Failed to logout");
	};

	$scope.logout = function() {
		$http.post('/logout', {}).then(logoutSuccess, logoutError);
	};

});