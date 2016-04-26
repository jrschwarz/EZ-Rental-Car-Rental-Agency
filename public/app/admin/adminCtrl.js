angular.module('app').controller('adminCtrl', function($scope, AuthenticationService, VehicleService) {

	$scope.vehicles = [];

	$scope.user = AuthenticationService.getUser();

	VehicleService.getAllVehicles().then(function(data) { if(data) $scope.vehicles = data; });

});