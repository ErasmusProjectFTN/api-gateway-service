'use strict';

angular.module('wsapp')
    .controller('PersonalInfoFileUploadController', function ($scope, authService, $location) {
    $scope.data.userid = 1;  
    authService.fileUpload($scope.data,$scope.myFile,
       			   function(response){

        				   console.log(response.data);
        				   alertify.success("WELCOME!");
        				   $state.go('home');
        				   
        			   }
        			   ,function(response){

        					console.log(response.data);
        					alertify.error("ERROR");

        			   });

   });