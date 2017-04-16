'use strict';

angular.module('wsapp')
    .controller('DegreeProgrammesDisplayController', function ($scope, $location, institutionsDisplayService, $state) {
    	
    	$scope.programmes = [];
    	
        institutionsDisplayService.loadProgrammes().then(function(response){
        	$scope.programmes.length = 0;
        	angular.extend($scope.programmes, response);
    	});
        
        $scope.showDegreeProgramme = function(identifier){
    		console.log(identifier)
    		// get programme information
    		institutionsDisplayService.loadProgramme(identifier).then(function(response){
    			console.log(response);
        		$state.go('degreeProgrammeInfo', {degreeProgramme:response});
    		});
    	}
        
        $scope.searchProgramme = function(programme){
        	console.log(programme)
        	institutionsDisplayService.searchProgrammes(programme).then(function(response){
    			$scope.programmes.length = 0;
    			angular.extend($scope.programmes, response);
    			console.log('changing programmes...');
    			if(!$scope.$$phase) {
                    $scope.$apply();
    			}
    		})
        	
        }
    })
    .controller('DegreeProgrammeInfoController',function($scope, $stateParams){
		console.log($stateParams.degreeProgramme);
		$scope.degreeProgramme = $stateParams.degreeProgramme;
	});