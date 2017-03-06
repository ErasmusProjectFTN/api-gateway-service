'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
    $stateProvider
            .state('subject', {
                   url: '/subject',
                   views: {
                       'content': {
                           templateUrl: 'subject/subject.html',
                           controller: 'SubjectController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               });






    });
