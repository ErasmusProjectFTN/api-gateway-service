'use strict';

angular.module('wsapp')
    .controller('InstitutionsDisplayController', function ($scope, $location) {
        
    	
    	var ftn = {
    			identifier:"123",
    			institutionName: "Faculty of technical sciences",
    			institutionStatus: "Accredited",
    			institutionType: "Faculty",
    			institutionAddress: "Novi Sad, Serbia",
    			url: "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka"
    	}
    	var pmf = {
    			identifier:"234",
    			institutionName: "Faculty sciences",
    			institutionStatus: "Accredited",
    			institutionType: "Faculty",
    			institutionAddress: "Novi Sad, Serbia",
    			url: "https://www.pmf.uns.ac.rs/en/"
    	}
        $scope.institutions = [ftn, pmf]
});