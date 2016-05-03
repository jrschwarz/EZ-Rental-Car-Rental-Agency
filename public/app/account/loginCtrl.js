angular.module('app').controller('loginCtrl', function($scope, $http, $location, AuthenticationService, ToastService) {

	$scope.login = function(user) {

		AuthenticationService.login(user).then(function(){
			$location.path('/admin');
			ToastService.successToast('Successfully logged in', user);
		});
		
	};
});