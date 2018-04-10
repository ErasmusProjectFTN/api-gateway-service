'use strict';

angular.module('wsapp')
    .controller('RecommenderController', function ($scope, $location, $window, recommenderService) {
        $scope.marks={}; 
        $scope.recommend = function(){
        	
            recommenderService.recommendCourses($scope.marks,
       			   function(response){
        				   console.log(response.data);
        				   if(response.data.success==true){
        				   	alertify.success("SUCCESS");
        				   }else{
        				   	alertify.error("ERROR");
        				   }
        			   }
        			   ,function(response){

        					console.log(response);
        					alertify.error("ERROR");

        			   });
        }
});