'use strict';

angular.module('wsapp')
    .controller('DegreeInstanceController', function ($scope, institutionService, $location) {
       
        $scope.degreeProgrammeInstance = function(){
            institutionService.insertDegreeInstance($scope.data,
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