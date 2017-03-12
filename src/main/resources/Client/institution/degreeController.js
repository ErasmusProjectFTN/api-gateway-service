'use strict';

angular.module('wsapp')
    .controller('DegreeController', function ($scope, institutionService, $location) {
        
        $scope.degree = function(){
            institutionService.insertDegree($scope.data,
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