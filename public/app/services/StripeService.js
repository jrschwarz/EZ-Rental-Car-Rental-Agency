angular.module('app').factory('StripeService', ['$http', StripeService]);

function StripeService($http) {

	function generateCardData(card, handler) {
		Stripe.card.createToken({
		  name: card.name,
		  number: card.number,
		  cvc: card.cvc,
		  exp_month: card.expiry.split('/')[0],
		  exp_year: card.expiry.split('/')[1]
		}, handler);
	};

	return ({
		generateCardData: generateCardData
	});
};