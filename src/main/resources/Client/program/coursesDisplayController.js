'use strict';

angular.module('wsapp')
    .controller('CoursesDisplayController', function ($scope, $location, institutionsDisplayService, $state, $cookies) {
        
        $scope.courses = [];
        
        $scope.showModifyDelete = false;
    	
    	if ($cookies.get('loginFlag') == 'ADMIN')
    		$scope.showModifyDelete = true;
        
    	institutionsDisplayService.loadCourses().then(function(response){
                $scope.courses.lenght = 0;
                angular.extend($scope.courses, response);
    	});
    	
    	$scope.showCourse = function(identifier){
    		console.log(identifier)
    		//get course information
    		institutionsDisplayService.loadCourse(identifier).then(function(response){
    			console.log(response);
        		$state.go('courseInfo', {course:response});
    		});
    	}

        $scope.search = function(course){
                console.log(course);
                institutionsDisplayService.searchCourses(course).then(function(response){
                    console.log(response);
                    $scope.courses = response;
                    //$scope.courses.lenght = 0;
                    //angular.extend($scope.courses, response);
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
        }
        
        $scope.modify = function(course){
        	console.log(course)
        	$state.go('modifyCourse', {course:course});
        }
        
        $scope.delete = function(){
        	console.log('TODO delete');
        }
    })
    .controller('CourseInfoController',function($scope, $stateParams){
		console.log($stateParams.course);
		$scope.course = $stateParams.course;
	})
	.controller('CourseModifyController',function($scope, $stateParams, institutionsDisplayService, $state){
		// get data on this institution
		console.log($stateParams.course);
		$scope.data = $stateParams.course;
		
		 $scope.modifyCourse = function(){
			 institutionsDisplayService.modifyCourse($stateParams.course,
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
