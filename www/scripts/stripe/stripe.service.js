(function() {
	'use strict';

	angular
		.module('barebone.stripe')
		.factory('stripeService', stripeService);

	/*	stripeService.$inject = ['$q'];

	/* @ngInject*/
	function stripeService($q) {
		var service = {
			webSite:webSite
			};
		return service;

		// *********************************************************

		function webSite() {
			/*if (!window.stripe) {
				alert("stripe plugin not installed");
				return;
			}

			if (!card) {
				alert("Invalid Card Data");
				return;
			}

			var payment = {
				// amount is in cents so * 100
				amount: card.amount * 100,
				currency: 'usd',
				card: {
					"number": card.number,
					"exp_month": card.exp_month,
					"exp_year": card.exp_year,
					"cvc": card.cvc,
					"name": card.holder
				},
				description: description
			};*/

			var defer = $q.defer()

			window.stripe.charges.create(website,
				function (response) {
					defer.resolve(response);
				},
				function (response) {
					defer.reject(response);
				}
			);

			return defer.promise;
		}
	}
})();
