(function(){
	'use strict';

	angular.module('DataArtApp', [
		'ui.router',
		'DataArtApp.api',
		'DataArtApp.about',
		'DataArtApp.search',
		'DataArtApp.friends',
		'DataArtApp.details'
		])


	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('about', {
			url: '/',
			controller: 'AboutCtrl',
			templateUrl: './js/about/about.html'
		}).state('search', {
			url: '/search',
			controller: 'SearchCtrl',
			templateUrl: './js/search/search.html'
		}).state('friends', {
			url: '/friends',
			controller: 'FriendsCtrl',
			templateUrl: './js/friends/friends.html'
		}).state('details', {
			url: '/details/:id',
			controller: 'DetailsCtrl',
			templateUrl: './js/details/details.html'
		})
		$urlRouterProvider.otherwise('/');
	}])
})();