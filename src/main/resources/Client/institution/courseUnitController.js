'use strict';

angular.module('wsapp')
    .controller('CourseUnitController', function ($scope, institutionService, $location) {
        
        $scope.courseunit = function(){
            //TODO call method from service
        				   	alertify.success("Test");
        }

        $scope.courseunit = function(){
            institutionService.insertCourseUnit($scope.data,
       			   function(response){

        				   console.log(response.data);
        				   alertify.success("WELCOME!");
        				   $state.go('home');
        				   
        			   }
        			   ,function(response){

        					console.log(response.data);
        					alertify.error("ERROR");

        			   });
        }
});