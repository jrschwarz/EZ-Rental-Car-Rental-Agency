angular.module('app').factory('ToastService', [ToastService]);

function ToastService() {

	toastr.options = {
				timeOut: '1000',
				toastClass: 'alert',
			    iconClasses: {
			        error: 'alert-danger',
			        info: 'alert-info',
			        success: 'alert-success',
			        warning: 'alert-warning'
			    }
			};

	function successToast(message, title) {
		if(!title) title = "";
		toastr.success(message, title);

	};

	function errorToast(message, titles) {
		if(!title) title = "";
		toastr.error(message, title);
	};

	return ({
		successToast: successToast,
		errorToast: errorToast
	});
};