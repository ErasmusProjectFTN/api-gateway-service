'use strict';

angular.module('wsapp')
    .controller('ProgramController', function ($scope, programService, $location) {
        
        $scope.program = function(){
        				   	alertify.success("Test");
        }
});