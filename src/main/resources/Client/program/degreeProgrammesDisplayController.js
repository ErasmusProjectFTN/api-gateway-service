'use strict';

angular.module('wsapp')
    .controller('DegreeProgrammesDisplayController', function ($scope, $location) {
        
    	
    	var programme1 = {
    			degreeUnitCode:"1",
    			degreeProgrammeTitle: "Computing and Control Engineering",
    			language: "Serbian, English",
    			location: "Novi Sad, Serbia",
    			qualification: "Bachelor with Honours in Electrical and Computer Engineering (B.Elec.Comp.Eng.) ",
    			credit: "242",
    			url: "http://ftn.uns.ac.rs/n1649562982/computing-and-control-engineering"
    	}
    	var programme2 = {
    			degreeUnitCode:"2",
    			degreeProgrammeTitle: "Mechatronics",
    			language: "Serbian, English",
    			location: "Novi Sad, Serbia",
    			qualification: "Bachelor with Honours in Mechatronics (B.Mechatron.)",
    			credit: "240",
    			url: "http://ftn.uns.ac.rs/1612271290/mechatronics"
    	}
        $scope.programmes = [programme1, programme2]
});