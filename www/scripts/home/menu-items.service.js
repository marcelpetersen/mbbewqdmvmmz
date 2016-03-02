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
			icon: 'ion-person'
		}, {
			title: 'Usahawam',
			path: 'products-extended',
			icon: 'ion-ios-briefcase'
		}, {
			title: 'Warga PKNS',
			path: 'galleries',
			icon: 'ion-ios-people'
		}, {
			title: 'Perkhidmatan',
			path: 'map',
			icon: 'ion-wrench'
		}];

		return data;
	}
})();
