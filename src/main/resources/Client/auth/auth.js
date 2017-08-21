'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
    $stateProvider
           .state('signin', {
                   url: '/signin',
                   views: {
                       'content': {
                           templateUrl: 'auth/signin/signin.html',
                           controller: 'SigninController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               })
            .state('signout', {
                   url: '/signout',
                   views: {
                       'content': {
                           templateUrl: 'auth/signout/signout.html',
                           controller: 'SignoutController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               })
	        .state('signup', {
	            url: '/signup',
	            views: {
	                'content': {
	                    templateUrl: 'auth/signup/personal.html',
	                    controller: 'PersonalController'
	                },
	                'navbar':{
	                    templateUrl: 'navbar/navbar.html',
	                    controller: 'NavbarController'
	                }
	            }
	        });

        

    });
