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
    	
    	$scope.modify = function(institution){
    		$state.go('modifyInstitution', {institution:institution});
    	}
    	
    	$scope.delete = function(institutionId){
    		console.log('TODO delete');
    	}
    })
	.controller('InstitutionInfoController',function($scope, $stateParams){
		console.log($stateParams.institution);
		$scope.institution = $stateParams.institution;
	})
	.controller('InstitutionModifyController',function($scope, $stateParams, institutionsDisplayService, $state){
		// get data on this institution
		console.log($stateParams.institution);
		$scope.data = $stateParams.institution;
		
		 $scope.modifyInstitution = function(){
			 institutionsDisplayService.modifyInstitution($stateParams.institution,
	       			   function(response){

	        				   console.log(response.data);
	        				   //if(response.data.success==true){
	        				   	alertify.success("SUCCESS");
	        				   	$state.go('home');
	        				   //}else{
	        				   	//alertify.error("ERROR");
	        				   //}

	        			   }
	        			   ,function(response){

	        					console.log(response.data);
	        					alertify.error("ERROR");

	        			   });
	        }
	});