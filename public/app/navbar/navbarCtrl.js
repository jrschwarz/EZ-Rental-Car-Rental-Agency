angular.module('app').controller('navbarCtrl', function($scope, $window, $http, $location, AuthenticationService, ToastService) {

	$scope.goHome = function() {
		$window.location.href = "/";
	};

	$scope.isAdmin = function() {
		return AuthenticationService.hasAdminRights();
	};

	$scope.isLoggedIn = function() {
		return AuthenticationService.isLoggedIn();
	};

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

	$scope.logout = function() {
		var user = AuthenticationService.getUser().role;
		AuthenticationService.logout();
		$location.path('/');
		ToastService.successToast('Successfully logged out', user);
	};


});