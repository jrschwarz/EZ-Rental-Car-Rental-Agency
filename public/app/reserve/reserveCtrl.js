angular.module('app').controller('reserveCtrl', function($scope, VehicleService) {

	$scope.vehicles = [];
	$scope.vehicleToReserve = null;

	VehicleService.getAllVehicles().then(function(data) { if(data) $scope.vehicles = data; });

	$scope.reserveVehicle = function(vehicle) {
		//console.log(vehicle);
		$scope.vehicleToReserve = vehicle;
	};
});