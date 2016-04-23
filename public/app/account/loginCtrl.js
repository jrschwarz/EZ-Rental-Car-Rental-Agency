angular.module('app').controller('loginCtrl', function($scope, $http, $location) {

	$scope.login = function(user) {

		console.log(user);
		$location.path('/admin');
		toastr.options.timeOut = 1000;
		toastr.success('Successfully logged in as ' + user);
	};
});