(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Orang Awam',
			path: 'articles',
			icon: 'ion-speakerphone'
		}, {
			title: 'Usahawam',
			path: 'products-extended',
			icon: 'ion-android-cart'
		}, {
			title: 'Warga PKNS',
			path: 'galleries',
			icon: 'ion-images'
		}, {
			title: 'Perkhidmatan',
			path: 'map',
			icon: 'ion-map'
		}];

		return data;
	}
})();
