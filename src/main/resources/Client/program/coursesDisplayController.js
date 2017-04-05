'use strict';

angular.module('wsapp')
    .controller('CoursesDisplayController', function ($scope, $location, institutionsDisplayService) {
        
    	institutionsDisplayService.loadCourses().then(function(response){
        	$scope.courses = response;
    	});
});