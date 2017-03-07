'use strict';

angular.module('wsapp')
    .controller('CourseInstanceController', function ($scope, institutionService, $location) {
        $scope.data = {}
        $scope.data.selectedOption = "2";
        $scope.data.availableOptions = [ {name : "- Select -", id : "1"}, {name : "Semestar", id : "2"},{ name : "Trimestar", id : "3"}];

        $scope.courseinstance = function(){
            //TODO call method from service
        				   	alertify.success("Test");
        }
});