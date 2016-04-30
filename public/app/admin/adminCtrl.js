angular.module('app').controller('adminCtrl', function($scope, AuthenticationService, VehicleService, SearchService) {

	$scope.reservedVehicles = [];
	$scope.allVehicles = [];
	$scope.carFilter = SearchService;

	$scope.user = AuthenticationService.getUser();

	VehicleService.getReservedVehicles().then(function(data) { if(data) $scope.reservedVehicles = data; });
	VehicleService.getAllVehicles().then(function(data) { if(data) $scope.allVehicles = data; });

	$scope.noSearchResults = function(arrayLength) {

		if(arrayLength > 0) return false;
		else if(!($scope.carFilter.searchContents)) return false;
		else return true;
	};

});