'use strict';

angular.module('wsapp')
    .controller('SigninController', function ($scope, authService, $location, $state) {

    	console.log("signin controller activated")
    	
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

    				}
    				,function(response){

    					console.log(response.data);
    					alertify.error("ERROR");

    				});
    	}


    });
