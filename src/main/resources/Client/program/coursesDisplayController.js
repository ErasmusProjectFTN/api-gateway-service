'use strict';

angular.module('wsapp')
    .controller('CoursesDisplayController', function ($scope, $location, institutionsDisplayService, $state) {
        
    	institutionsDisplayService.loadCourses().then(function(response){
        	$scope.courses = response;
    	});
    	
    	$scope.showCourse = function(identifier){
    		console.log(identifier)
    		//get course information
    		institutionsDisplayService.loadCourse(identifier).then(function(response){
    			console.log(response);
        		$state.go('courseInfo', {course:response});
    		});
    	}
    })
    .controller('CourseInfoController',function($scope, $stateParams){
		console.log($stateParams.course);
		$scope.course = $stateParams.course;
	});
