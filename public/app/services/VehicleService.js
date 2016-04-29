angular.module('app').factory('VehicleService', ['$http', VehicleService]);

function VehicleService($http) {

	function getAllVehicles() {

		return $http.get('/api/vehicles').then(function success(response) {
			return response.data;
		});
	};

	function getAvailVehicles() {
		return $http.get('/api/vehicles-avail').then(function succeed(response) {
			return response.data;
		});
	};

	function getReservedVehicles() {
		return $http.get('/api/vehicles-reserved').then(function success(response) {
			console.log(response.data);
		});
	};

	function getMyVehicles(userId) {
		return $http.get('/api/vehicles-reserved/' + userId).then(function success(response) {
			console.log(response.data);
		})
	}

	return ({
		getAllVehicles: getAllVehicles,
		getReservedVehicles: getReservedVehicles,
		getAvailVehicles: getAvailVehicles,
		getMyVehicles: getMyVehicles
	});
};