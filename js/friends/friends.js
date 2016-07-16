(function(){
	'use strict';

	angular.module('DataArtApp.friends', [])

	.controller('FriendsCtrl', ['$scope', 'DataArtApi', function($scope, api) {
		$scope.calculateAge = calculateAge;

		init();

		function init(){
			api.getFriends().then(function successCallback(response) {
				$scope.friends = response.data;
			  }, function errorCallback(response) {

			  });
		}

		function calculateAge(birthday) {
                            birthday = new Date(birthday);
                            var ageDifMs = Date.now() - birthday.getTime();
                            var ageDate = new Date(ageDifMs);
                            return Math.abs(ageDate.getUTCFullYear() - 1970);
                        }
	}])
})();