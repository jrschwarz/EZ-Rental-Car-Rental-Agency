angular.module('app').factory('authService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;

    // return available functions for use in the controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus
    });

    function isLoggedIn() {
	  if(user) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function getUserStatus() {
	  return user;
	}

}]);