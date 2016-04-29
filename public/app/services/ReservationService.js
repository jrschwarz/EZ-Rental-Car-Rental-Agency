angular.module('app').factory('ReservationService', ['$http', ReservationService]);

function ReservationService($http) {

	function reserve(vehicle, user, dates, payment) {

		var data = {
			vehicle: vehicle,
			user: user,
			dates: dates,
			payment: payment
		};

		return $http.post('/api/reservation', data).then(function success(response) {
			return true;
		}, function failure(err) {
			return false;
		});
	};

	return ({
		reserve: reserve
	})
};