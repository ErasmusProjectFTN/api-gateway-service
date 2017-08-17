'use strict';

angular.module('wsapp')
    .controller('InstitutionsDisplayController', function ($scope, $state, $location, institutionsDisplayService, $cookies) {
           	
    	$scope.institutions = [];
    	
    	$scope.showModifyDelete = false;
    	
    	if ($cookies.get('loginFlag') == 'ADMIN')
    		$scope.showModifyDelete = true;
    	
    	institutionsDisplayService.loadInstitutions().then(function(response){
    		$scope.institutions.lenght = 0;
    		angular.extend($scope.institutions, response);
    		console.log('loading institutions...');
    	});
    	
    	
    	$scope.showInstitution = function(identifier){
    		console.log(identifier)
    		// get institution information
    		institutionsDisplayService.loadInstitution(identifier).then(function(response){
    			console.log(response);
        		$state.go('institutionInfo', {institution:response});
    		});
    	}
    	
    	$scope.search = function(institution){
    		institutionsDisplayService.searchInstitutions(institution).then(function(response){
    			$scope.institutions.length = 0;
    			angular.extend($scope.institutions, response);
    			console.log('changing instutitions...');
    			if(!$scope.$$phase) {
                    $scope.$apply();
    			}
    		})
    	}
    	
    	$scope.modify = function(){
    		console.log('TODO modify');
    	}
    	
    	$scope.delete = function(){
    		console.log('TODO delete');
    	}
    })
	.controller('InstitutionInfoController',function($scope, $stateParams){
		console.log($stateParams.institution);
		$scope.institution = $stateParams.institution;
	});