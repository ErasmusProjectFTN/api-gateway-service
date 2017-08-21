'use strict';

angular.module('wsapp')
    .controller('SigninController', function ($scope, authService, $location, $state, $cookies) {

    	
    	$scope.signin = function(){
    		//alertify.success("next");

    		console.log("signing in...")
    		authService.signin(
    				$scope.username,
    				$scope.password,
    				function(response){
    					console.log(response.data);
    					//if(response.data.success==true){
    					alertify.success("Success!");
    					$state.go('program');
    					//}else{
    					//alertify.error("ERROR");
    					//}
    					$cookies.put('loginFlag', response.data.flag)
    					$cookies.put('student', JSON.stringify(response.data.student))
    					console.log("cookie value")
    					console.log($cookies.get('student'))
    					console.log($cookies.get('loginFlag'))

    				}
    				,function(response){

    					console.log(response.data);
    					alertify.error("Incorrect login information.");

    				});
    	}


    });
