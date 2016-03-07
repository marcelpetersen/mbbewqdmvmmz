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
				latitude : 3.0915378,
				longitude : 101.5453529
			},
			zoomLevel: 15,
			annotations : [{
					title : 'Perbadanan Kemajuan Negeri Selangor',
					latitude : 3.0915378,
					longitude : 101.5453529
			}, {
					title : 'Perbadanan Kemajuan Negeri Selangor',
					latitude : 3.0915378,
					longitude :101.5453529
			}]
		};
		return data;
	}
})();
