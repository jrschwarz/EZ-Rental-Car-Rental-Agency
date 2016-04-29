angular.module('app').controller('adminCtrl', function($scope, AuthenticationService, VehicleService, SearchService) {

	$scope.reservedVehicles = [];
	$scope.allVehicles = [];
	$scope.carFilter = SearchService;

	$scope.user = AuthenticationService.getUser();

	VehicleService.getReservedVehicles().then(function(data) { if(data) {
			$scope.reservedVehicles = data; 
		}
	});
	VehicleService.getAllVehicles().then(function(data) { if(data) $scope.allVehicles = data; });

});