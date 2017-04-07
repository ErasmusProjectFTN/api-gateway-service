'use strict';

angular.module('wsapp', ['ngResource', 'ui.router', 'googlechart', 'ui.bootstrap', 'ui.bootstrap.tpls'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
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
                       }
                   }
               });
       
    });
