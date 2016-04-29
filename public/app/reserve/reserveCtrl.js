angular.module('app').controller('reserveCtrl', function($document, $location, $scope, VehicleService, AuthenticationService, SearchService, ReservationService, StripeService) {
	
	$scope.carFilter = SearchService;
	$scope.dateRangeErrors = false;
	$scope.formErrors = false;
	$scope.processError = false;
	$scope.availVehicles = [];
    $scope.myVehicles = [];
	$scope.vehicleToReserve = null;
	$scope.user = AuthenticationService.getUser();

	$scope.dateRange = {
		fromDate: new Date().toString('MM/dd/yyyy'),
		toDate: new Date().toString('MM/dd/yyyy')
	};

	$scope.card = {
		type: null,
		name: null,
		number: null,
		expiry: null,
		cvc: null
	};

	VehicleService.getAvailVehicles().then(function(data) { if(data){ $scope.availVehicles = data; }});
    VehicleService.getMyVehicles($scope.user._id).then(function(data) { if(data) { $scope.myVehicles = data; }});
	$scope.$watchGroup(['dateRange.fromDate', 'dateRange.toDate'], function(newValue, oldValue, scope) { $scope.dateValidation(); });

    console.log($scope.user);

	$scope.reserveVehicle = function(vehicle) {
		$scope.vehicleToReserve = vehicle;
	};

	$scope.stripeCallback = function (code, result) {
	    if (result.error) {
	        $scope.formErrors = true;
	    } else {
	        $scope.formErrors = false;
	    }
    };

    $scope.dateValidation = function () {

    	if (Date.parse($scope.dateRange.fromDate) < Date.today()) {
    		$scope.dateRangeErrors = true;
    	}
		else if (Date.parse($scope.dateRange.fromDate) > Date.parse($scope.dateRange.toDate)) {
			$scope.dateRangeErrors = true;
		}
    	else {
    		$scope.dateRangeErrors = false;
    	}
    };

    $scope.reserve = function() {
    	var invalidsExist = $document.find('#reservePaymentForm').find('.ng-invalid').length != 0;

    	// //Form validation
    	if($scope.dateRangeErrors){
    		$scope.formErrors = true;
    		return;
    	}
    	else if (invalidsExist || 
    		 !$scope.card.type || 
    		 !$scope.card.name || 
    		 !$scope.card.number || 
    		 !$scope.card.expiry || 
    		 !$scope.card.cvc) {

    		$scope.formErrors = true;
    		return;
    	}
    	else {
    		$scope.formErrors = false;
    	}

    	//Process card and retrieve token, card data, process status
    	StripeService.generateCardData($scope.card, processedCardHandler);
    };

    function processReserve(cardResponse) {
    	//Convert string dates to Date format
    	$scope.dateRange.fromDate = Date.parse($scope.dateRange.fromDate);
    	$scope.dateRange.toDate = Date.parse($scope.dateRange.toDate);

    	ReservationService.reserve($scope.vehicleToReserve, AuthenticationService.getUser(), $scope.dateRange, cardResponse)
        .then(function(data){
            if(data){
                $document.find("#createReservationModal").modal('toggle');
                toastr.success("Successfully Reserved!", $scope.vehicleToReserve.name);
                resetData();
            }
            else {
                toastr.error("Couldn't reserve due to error.");
            }
        });

    };

    function resetData() {
        $scope.dateRange = {
            fromDate: new Date().toString('MM/dd/yyyy'),
            toDate: new Date().toString('MM/dd/yyyy')
        };

        $scope.card = {
            type: null,
            name: null,
            number: null,
            expiry: null,
            cvc: null
        };

        $scope.dateRangeErrors = false;
        $scope.formErrors = false;
        $scope.processError = false;
        $scope.vehicleToReserve = null;
        VehicleService.getAvailVehicles().then(function(data) { if(data){ $scope.availVehicles = data; console.log(data);}});

    };

    function processedCardHandler(status, response) {
    	if(!response.error){
			$scope.processError = false;
			processReserve(response);
		}
	    else {
	    	$scope.processError = true;
	    	return;
	    }
    };
});



