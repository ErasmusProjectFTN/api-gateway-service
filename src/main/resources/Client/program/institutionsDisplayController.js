'use strict';

angular.module('wsapp')
    .controller('InstitutionsDisplayController', function ($scope, $state, $location, institutionsDisplayService) {
           	
    	institutionsDisplayService.loadInstitutions().then(function(response){
    		$scope.institutions = response;
    	});
    	
    	
    	$scope.showInstitution = function(identifier){
    		console.log(identifier)
    		// get institution information
    		institutionsDisplayService.loadInstitution(identifier).then(function(response){
    			console.log(response);
        		$state.go('degreeProgrammeInfo', {degreeProgramme:response});
    		});
    	}
    })
	.controller('InstitutionInfoController',function($scope, $stateParams){
		console.log($stateParams.institution);
		$scope.institution = $stateParams.institution;
	});