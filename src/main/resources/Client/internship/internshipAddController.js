'use strict';

angular.module('wsapp')
    .controller('InternshipAddController', function ($scope, internshipService,companyDisplayService, $location, $state) {
        $scope.data={};
        $scope.companies=[];
        $scope.selectedCompany="";
        companyDisplayService.loadCompanies().then(function(response){
        	console.log(response);
        	$scope.companies=response;
        });
        $scope.program = function(){
        				   	alertify.success("Test");
        }
        $scope.intern = function(){
        	console.log($scope.data);
            internshipService.insertInternship($scope.data,$scope.selectedCompany,
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