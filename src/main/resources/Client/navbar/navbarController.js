'use strict';

angular.module('wsapp')
    .controller('NavbarController', function ($scope, $state, authService, $cookies) {

    	$scope.isAdmin = false;
    	$scope.isStudent = false;
    	
    	if ($cookies.get('loginFlag') == 'ADMIN')
    		$scope.isAdmin = true;
    	else if ($cookies.get('loginFlag') == 'STUDENT')
    		$scope.isStudent = true;
    	
    });
