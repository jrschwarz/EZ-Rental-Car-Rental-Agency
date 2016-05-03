angular.module('app').controller('footerCtrl', function($scope, AuthenticationService) {

	$scope.copyrightYear = new Date().getFullYear();
	$scope.isLoggedIn = function() {
		return AuthenticationService.isLoggedIn();
	};

});