'use strict';

angular.module('wsapp')
    .controller('KnowledgeDisplayController', function ($scope, $location, knowledgeDisplayService, $state) {
        
        $scope.knowledges = [];
        
        knowledgeDisplayService.loadKnowledges().then(function(response){
                $scope.knowledges.lenght = 0;
                console.log(response);
                angular.extend($scope.knowledges, response);
    	});
    	
    	$scope.showKnowledge = function(identifier){
    		console.log(identifier)
    		//get course information
    		knowledgeDisplayService.loadKnowledge(identifier).then(function(response){
    			console.log(response);
        		$state.go('knowledgeInfo', {knowledge:response});
    		});
    	}

        $scope.search = function(knowledge){
                console.log(knowledge);
                knowledgeDisplayService.searchKnowledge(knowledge).then(function(response){
                    console.log(response);
                    $scope.knowledges = response;
                    //$scope.courses.lenght = 0;
                    //angular.extend($scope.courses, response);
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
        }
        
    })
    .controller('KnowledgeInfoController',function($scope,knowledgeDisplayService, $stateParams,$state){
		console.log($stateParams.knowledge);
		$scope.selectedKnowledge="";
		knowledgeDisplayService.loadKnowledges().then(function(response){
			$scope.knowledges=response;
		})

		$scope.dependKnowledge = function(identifier){
			console.log($scope.selectedKnowledge);
    		knowledgeDisplayService.dependKnowledge(identifier,$scope.selectedKnowledge).then(function(response){
    			console.log(response);
        		$state.go('home');
    		});
    	}
		$scope.parentKnowledge = function(identifier){
			console.log($scope.selectedKnowledge);
    		knowledgeDisplayService.parentKnowledge(identifier,$scope.selectedKnowledge).then(function(response){
    			console.log(response);
        		$state.go('home');
    		});
    	}
		$scope.knowledge = $stateParams.knowledge;
	});