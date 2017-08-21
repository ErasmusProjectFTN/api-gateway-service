'use strict';

angular.module('wsapp')
    .controller('ApplicationController', function ($scope, institutionService, $location, $state) {
        
    	 $scope.data = {}
         $scope.data.selectedOption = "2";
         $scope.data.availableOptions = [ {name : "- Select -", id : "1"}, {name : "Semestar", id : "2"},{ name : "Trimestar", id : "3"}];

    	
    	
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