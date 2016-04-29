angular.module('app').factory('VehicleService', ['$http', VehicleService]);

function VehicleService($http) {

	function getAllVehicles() {

		return $http.get('/api/vehicles').then(function success(response) {
			return response.data;
		});
	};

	function getReservedVehicles() {
		return $http.get('/api/vehicles-reserved').then(function success(response) {
			return response.data;
		});
	};

	return ({
		getAllVehicles: getAllVehicles,
		getReservedVehicles: getReservedVehicles
	});
};