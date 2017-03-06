'use strict';

angular.module('wsapp')
    .controller('SubjectController', function ($scope, subjectService, $location) {
        
        $scope.addsubject = function(){

        subjectService.insertSubject($scope.data.name,
        			   function(response){

        				   console.log(response.data);
        				   	alertify.success("Success");
        				   	$state.go('home');
        				   
        			   }
        			   ,function(response){

        					console.log(response.data);
        					alertify.error("Error");

        			   });
     }
});