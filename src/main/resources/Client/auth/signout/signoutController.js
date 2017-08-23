'use strict';

angular.module('wsapp')
    .controller('SignoutController', function ($scope, authService, $location, $state, $cookies) {

    	$cookies.remove('loginFlag')
		$cookies.remove('student')
		$state.go('program')
    	

    });
