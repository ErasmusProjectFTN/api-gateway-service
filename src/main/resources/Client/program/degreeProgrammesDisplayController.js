'use strict';

angular.module('wsapp')
    .controller('DegreeProgrammesDisplayController', function ($scope, $location, institutionsDisplayService, $state, $cookies) {
    	
    	$scope.programmes = [];

    	$scope.showApply = false;
    	$scope.showModifyDelete = false;

    	if ($cookies.get('loginFlag') == 'STUDENT')
    		$scope.showApply =  true;
    	else if ($cookies.get('loginFlag') == 'ADMIN')
    		$scope.showModifyDelete = true;
    	
        institutionsDisplayService.loadProgrammes().then(function(response){
        	$scope.programmes.length = 0;
        	angular.extend($scope.programmes, response);
    	});
        
        $scope.showDegreeProgramme = function(identifier){
    		console.log(identifier)
    		// get programme information
    		institutionsDisplayService.loadProgramme(identifier).then(function(response){
    			//console.log(response);
    			institutionsDisplayService.loadInternshipRecommendations(identifier).then(function(response2){
    				console.log(response2);
    				response.internships=response2;
        			console.log(response);
            		$state.go('degreeProgrammeInfo', {degreeProgramme:response});
    			})
    		});
    	}
        
        $scope.searchProgramme = function(programme){
        	console.log(programme)
        	institutionsDisplayService.searchProgrammes(programme).then(function(response){
    			$scope.programmes.length = 0;
    			angular.extend($scope.programmes, response);
    			console.log('changing programmes...');
    			if(!$scope.$$phase) {
                            $scope.$apply();
    			}
    		})
        	
        }
        
        $scope.apply = function(){
        	console.log("TODO apply")
        }
        
        $scope.modify = function(){
        	console.log('TODO modify')
        }
        
        $scope.delete = function(){
        	console.log('TODO delete')
        }
        
    })   
    .controller('DegreeProgrammeInfoController',function($scope, $stateParams, $location, institutionsDisplayService,internshipDisplayService, $state){
		console.log($stateParams.degreeProgramme);
		$scope.degreeProgramme = $stateParams.degreeProgramme;
		$scope.showInternship = function(identifier){
    		console.log(identifier)
    		//get course information
    		internshipDisplayService.loadInternship(identifier).then(function(response){
    			console.log(response);
        		$state.go('internshipInfo', {internship:response});
    		});
    	}
		 $scope.showDegreeProgramme = function(identifier){
	    		console.log(identifier)
	    		// get programme information
	    		institutionsDisplayService.loadProgramme(identifier).then(function(response){
	        			//console.log(response);
	        			institutionsDisplayService.loadInternshipRecommendations(identifier).then(function(response2){
	        				console.log(response2);
	        				response.internships=response2;
	    	    			console.log(response);
	    	        		$state.go('degreeProgrammeInfo', {degreeProgramme:response});
	        			})
	    		});
	    	}
	});