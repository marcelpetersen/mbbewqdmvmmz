(function() {
	'use strict';

	angular
		.module('barebone.map')
		.factory('mapService', mapService);

	mapService.$inject = [];

	/* @ngInject */
	function mapService() {
		var data = {
			origin: {
				latitude : 3.2003398,
				longitude : 101.7184225
			},
			zoomLevel: 15,
			annotations : [{
					title : 'Aidan Technology sdn. bhd.',
					latitude : 3.2003398,
					longitude : 101.7184225
			}, {
					title : 'Aidan Technology sdn. bhd.',
					latitude : 3.2003398,
					longitude :101.7184225
			}]
		};
		return data;
	}
})();
