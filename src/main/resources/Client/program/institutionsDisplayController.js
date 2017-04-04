'use strict';

angular.module('wsapp')
    .controller('InstitutionsDisplayController', function ($scope, $location, institutionsDisplayService) {
           	
    	institutionsDisplayService.loadInstitutions().then(function(response){
    		$scope.institutions = response;
    	});
});