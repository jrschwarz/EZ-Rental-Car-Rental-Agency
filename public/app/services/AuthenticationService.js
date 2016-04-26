angular.module('app').factory('AuthenticationService', ['$http', '$cookies', AuthenticationService]);

function AuthenticationService($http, $cookies) {

	function login(userType) {

		var user;
		var url = '/api/user/' + userType;

		return $http.get(url).then(function success(response) {
			user = response.data;
			$cookies.putObject('user', user);
		});
	};

	function isLoggedIn() {
		if(getUser()) return true;
		else return false;
	};

	function getUser() {
		return $cookies.getObject("user");
	};

	function hasAdminRights() {
		if(getUser()){
			switch(getUser().role) {
				case 'Customer': return false;
					break;
				case 'Employee': return true;
					break;
				case 'Manager': return true;
					break;
				default: return false;
			}
		}
	}

	function logout() {

		$cookies.remove('user');
	};

	return ({

		login: login,
		getUser: getUser,
		hasAdminRights: hasAdminRights,
		isLoggedIn: isLoggedIn,
		logout: logout
	});
};