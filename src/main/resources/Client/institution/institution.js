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
               }).state('course', {
                   url: '/course',
                   views: {
                       'content': {
                           templateUrl: 'institution/courseunit.html',
                           controller: 'CourseUnitController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               }).state('degree', {
                   url: '/degree',
                   views: {
                       'content': {
                           templateUrl: 'institution/degree.html',
                           controller: 'DegreeController'
                       },
                       'navbar':{
                           templateUrl: 'navbar/navbar.html',
                           controller: 'NavbarController'
                       }
                   }
               });
    });
