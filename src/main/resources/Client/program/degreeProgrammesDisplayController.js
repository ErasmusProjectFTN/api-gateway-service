'use strict';

angular.module('wsapp')
    .controller('DegreeProgrammesDisplayController', function ($scope, $location, institutionsDisplayService) {
    	
        institutionsDisplayService.loadProgrammes().then(function(response){
        	$scope.programmes = response;
    	});
});