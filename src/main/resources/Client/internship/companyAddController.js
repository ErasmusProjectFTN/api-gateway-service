'use strict';

angular.module('wsapp')
    .controller('CompanyAddController', function ($scope, companyService, $location, $state) {
        $scope.data={};
        $scope.program = function(){
        				   	alertify.success("Test");
        }
        $scope.comp = function(){
        	console.log($scope.data);
        	companyService.insertCompany($scope.data,
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

        					console.log(response);
        					alertify.error("ERROR");

        			   });
        }
});