(function(){
	'use strict';

	angular.module('DataArtApp.details', [])

	.controller('DetailsCtrl', ['$scope', '$stateParams', 'DataArtApi', 
		function($scope, $stateParams, api) {
		
			var friendId = $stateParams.id;
			$scope.friend = {};
			api.getFriend(friendId).then(function(response) {
				$scope.friend = response;
				//console.log('Hi, we will provide you with details!', $scope.friend);
			})

		}
	])
})();