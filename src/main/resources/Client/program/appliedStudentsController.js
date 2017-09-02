'use strict';

angular.module('wsapp')
    .controller('AppliedStudentsController', function ($scope, $location, institutionsDisplayService, $state, $cookies) {
        
    	var application1 = {"identifier":'123', "degreeProgrammeId": 'E2', "status": "In progress", "passport": "123456", "idCard":"123456"};
    	var application2 = {"identifier":'234', "degreeProgrammeId": 'E1', "status": "Accepted", "passport":"25154", "idCard":"5978645"};
    	
    	$scope.applications = [application1, application2];
    	$scope.availableOptions = ["In progress", "Accepted", "Denied"];
    	
    	// modify application status
    	$scope.modify = function(application){
    		console.log("modifying application");
    	}
    });
