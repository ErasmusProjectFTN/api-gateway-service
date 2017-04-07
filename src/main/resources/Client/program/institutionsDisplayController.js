'use strict';

angular.module('wsapp')
    .controller('InstitutionsDisplayController', function ($scope, $state, $location, institutionsDisplayService) {
           	
    	institutionsDisplayService.loadInstitutions().then(function(response){
    		$scope.institutions = response;
    	});
    	
    	
    	$scope.showInstitution = function(identifier){
    		console.log(identifier)
    		$state.go('institutionInfo', {institutionCode:identifier});
    	}
    })
	.controller('InstitutionInfoController',function($scope, $stateParams){
		console.log($stateParams.institutionCode);
		$scope.institutionCode = $stateParams.institutionCode;
	});