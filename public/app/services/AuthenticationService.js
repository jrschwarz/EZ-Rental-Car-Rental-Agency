angular.module('app').factory('AuthenticationService', ['$http', '$cookies', AuthenticationService]);

function AuthenticationService($http, $cookies) {

	function login(userType) {

		console.log($cookies.put('userRole'));
		user = userType;
		$cookies.put('userRole', user);
	};

	function isLoggedIn() {
		if(getUser()) return true;
		else return false;
	};

	function getUser() {
		return $cookies.get('userRole');
	};

	function hasAdminRights() {
		switch(getUser()) {
			case 'Customer': return false;
				break;
			case 'Employee': return true;
				break;
			case 'Manager': return true;
				break;
			default: return false;
		}
	}

	function logout() {

		$cookies.remove('userRole');
	};

	return ({

		login: login,
		getUser: getUser,
		hasAdminRights: hasAdminRights,
		isLoggedIn: isLoggedIn,
		logout: logout
	});
};