'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
    $stateProvider.state('institution', {
                   url: '/institution',
                   views: {
                       'content': {
                           templateUrl: 'institution/institution.html',
                           controller: 'InstitutionController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               });
    });
