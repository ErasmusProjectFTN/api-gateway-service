'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
    $stateProvider.state('program', {
                   url: '/program',
                   views: {
                       'content': {
                           templateUrl: 'program/program.html',
                           controller: 'ProgramController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               });
    });
