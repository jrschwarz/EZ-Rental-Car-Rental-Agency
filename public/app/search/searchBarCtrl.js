angular.module('app').controller('searchBar', function($scope, SearchService) {

	$scope.userSearch = SearchService;
});