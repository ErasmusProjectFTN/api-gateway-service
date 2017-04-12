'use strict';

angular.module('wsapp')
    .controller('DegreeProgrammesDisplayController', function ($scope, $location, institutionsDisplayService, $state) {
    	
        institutionsDisplayService.loadProgrammes().then(function(response){
        	$scope.programmes = response;
    	});
        
        $scope.showDegreeProgramme = function(identifier){
    		console.log(identifier)
    		// get institution information
    		institutionsDisplayService.loadProgramme(identifier).then(function(response){
    			console.log(response);
        		$state.go('degreeProgrammeInfo', {degreeProgramme:response});
    		});
    	}
    })
    .controller('DegreeProgrammeInfoController',function($scope, $stateParams){
		console.log($stateParams.degreeProgramme);
		$scope.degreeProgramme = $stateParams.degreeProgramme;
	});