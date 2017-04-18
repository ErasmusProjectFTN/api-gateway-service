'use strict';

angular.module('wsapp')
    .controller('InstitutionController', function ($scope, institutionService, $location, $state) {
        
        $scope.institution = function(){
            institutionService.insertInstitution($scope.data,
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