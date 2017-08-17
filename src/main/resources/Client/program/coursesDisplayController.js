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
        
        $scope.modify = function(){
        	console.log('TODO modify');
        }
        
        $scope.delete = function(){
        	console.log('TODO delete');
        }
    })
    .controller('CourseInfoController',function($scope, $stateParams){
		console.log($stateParams.course);
		$scope.course = $stateParams.course;
	});
