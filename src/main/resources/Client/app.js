'use strict';

angular.module('wsapp', ['ngResource', 'ui.router', 'googlechart', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngCookies'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/program');
         $stateProvider
           .state('home', {
                   url: '/home',
                   views: {
                       'content': {
                           templateUrl: 'welcome/welcome.html',
                           controller: 'WelcomeController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       },
                       'recommender':{
                    	   templateUrl: 'recommender/recommender.html',
                    	   controller: 'RecommenderController'
                       }
                   }
               });
       
    });
