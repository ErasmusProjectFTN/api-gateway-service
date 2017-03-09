'use strict';

angular.module('wsapp')
    .controller('CoursesDisplayController', function ($scope, $location) {
        
    	
    	var course1 = {
    			courseUnitCode:"12",
    			courseUnitTitle: "Intelligent systems",
    			courseUnitType: "Elective",
    			courseUnitLevel: "Bachelor",
    			credit: "8",
    			url: "http://ftn.uns.ac.rs/n1649562982/computing-and-control-engineering"
    	}
    	var course2 = {
    			courseUnitCode:"13",
    			courseUnitTitle: "Computer forensics",
    			courseUnitType: "Elective",
    			courseUnitLevel: "Bachelor",
    			credit: "5",
    			url: "http://ftn.uns.ac.rs/n1649562982/computing-and-control-engineering"
    	}
        $scope.courses = [course1, course2]
});