(function(){
	'use strict';

	angular.module('DataArtApp.api', [])

	.service('DataArtApi', ['$http', '$q', function($http, $q) {
		this.getFriends = getFriends;
		this.getFriend = getFriend;
		var _this = this;

		function getFriends() {
			return $http({
			  method: 'GET',
			  url: './db/friends.json'
			});
		}

		function getFriend(id) {
			return $q(function(resolve, reject){
				_this.getFriends().then(function(response){
					var friends = response.data;
					var friend = friends.filter(function(item) {
						return item.id == id;
					})[0];

					console.log(friend);
					if(friend) {
						resolve(friend);
					} else {
						reject();
					}
				})
			});
		}
	}])
})();