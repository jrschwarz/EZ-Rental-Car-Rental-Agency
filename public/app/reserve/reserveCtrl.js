angular.module('app').controller('reserveCtrl', function($scope, VehicleService, AuthenticationService) {

	$scope.vehicles = [];
	$scope.vehicleToReserve = null;
	$scope.user = AuthenticationService.getUser();

	VehicleService.getAllVehicles().then(function(data) { if(data) $scope.vehicles = data; });

	$scope.reserveVehicle = function(vehicle) {
		//console.log(vehicle);
		$scope.vehicleToReserve = vehicle;
	};
});