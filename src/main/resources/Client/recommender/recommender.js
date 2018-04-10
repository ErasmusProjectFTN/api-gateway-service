	'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
	    $stateProvider
	    .state('recommender', {
	                   url: '/recommender',
	                   views: {
	                       'content': {
	                           templateUrl: 'recommender/recommender.html',
	                           controller: 'RecommenderController'
	                       },
	                       'navbar':{
	                           templateUrl: 'navbar/navbar.html',
	                           controller: 'NavbarController'
	                       }
	                   }
	    });
    });
	    
    