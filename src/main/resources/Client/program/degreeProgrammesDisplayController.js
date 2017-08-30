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
        
        $scope.apply = function(programmeId){
        	console.log(programmeId)
    		$state.go('application', {programmeId:programmeId});
        }
        
        $scope.modify = function(degree){
        	$state.go('modifyDegree', {programme:degree});
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
	})
	.controller('DegreeModifyController',function($scope, $stateParams, $location, institutionsDisplayService,internshipDisplayService, $state){
		// get data on this institution
		console.log($stateParams.programme);
		$scope.data = $stateParams.programme;
		
		 $scope.modifyProgramme = function(){
			 institutionsDisplayService.modifyProgramme($stateParams.programme,
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