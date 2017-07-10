'use strict';

angular.module('wsapp')
    .controller('InternshipDisplayController', function ($scope, $location,knowledgeDisplayService, internshipDisplayService,institutionsDisplayService, $state) {
        $scope.internship={};
        $scope.internships = [];
        $scope.courseModel=[];
        $scope.courseData=[];
        institutionsDisplayService.loadCourses().then(function(response){
            $scope.courseData.lenght = 0;
            console.log(response);
            angular.forEach(response, function(value, key) {
            	$scope.courseData.push({id:value.courseUnitCode,name:value.courseUnitTitle});
            });
        });
        $scope.knowledgeModel=[];
        $scope.knowledgeData=[];
        knowledgeDisplayService.loadKnowledges().then(function(response){
            $scope.knowledgeData.lenght = 0;
            console.log(response);
            angular.forEach(response, function(value, key) {
            	$scope.knowledgeData.push({id:value.code,name:value.name});
            });
            });
        $scope.programmes=[];
        $scope.selectedProgramme="";
        institutionsDisplayService.loadProgrammes().then(function(response){
        	$scope.programmes.length = 0;
        	angular.extend($scope.programmes, response);
    	});
        $scope.settings = {
                scrollableHeight: '200px',
                scrollable: true,
                enableSearch: true
            };
        internshipDisplayService.loadInternships().then(function(response){
                $scope.internships.lenght = 0;
                console.log(response);
                angular.extend($scope.internships, response);
    	});
    	
    	$scope.showInternship = function(identifier){
    		console.log(identifier)
    		//get course information
    		internshipDisplayService.loadInternship(identifier).then(function(response){
    			console.log(response);
        		$state.go('internshipInfo', {internship:response});
    		});
    	}

        $scope.search = function(internship){
                console.log(internship);
                internship.knowledges=$scope.knowledgeModel;
        		internship.selectedProgramme=$scope.selectedProgramme;
        		internship.courses=$scope.courseModel;
                internshipDisplayService.searchInternship(internship).then(function(response){
                    console.log(response);
                    $scope.internships = response;
                    //$scope.courses.lenght = 0;
                    //angular.extend($scope.courses, response);
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
        }
        
    })
    .controller('InternshipInfoController',function($scope,companyDisplayService,knowledgeDisplayService,internshipDisplayService, $stateParams,$state){
    	$scope.knowledge=[];
    	$scope.selectedKnowledge="";
		console.log($stateParams.internship);
		$scope.internship = $stateParams.internship;
		$scope.company={};
		internshipDisplayService.loadCompany($scope.internship.internshipCode).then(function(response){
			$scope.company=response;
		})
		knowledgeDisplayService.loadKnowledges().then(function(response){
			$scope.knowledge=response;
		})

		$scope.addKnowledge = function(identifier){
			console.log($scope.selectedKnowledge);
    		knowledgeDisplayService.bindKnowledge(identifier,$scope.selectedKnowledge).then(function(response){
    			console.log(response);
        		$state.go('home');
    		});
    	}

		$scope.goCompany = function(identifier){
    		console.log(identifier)
    		//get course information
    		companyDisplayService.loadCompany(identifier).then(function(response){
    			console.log(response);
        		$state.go('companyInfo', {company:response});
    		});
    	}
		$scope.showKnowledge = function(identifier){
    		console.log(identifier)
    		//get course information
    		knowledgeDisplayService.loadKnowledge(identifier).then(function(response){
    			console.log(response);
        		$state.go('knowledgeInfo', {knowledge:response});
    		});
    	}
	}).directive('multiselectDropdown', function () {
	    return {
	        restrict: 'E',
	        scope: {
	            model: '=',
	            options: '=',
	        },
	        template:
	            "<div class='btn-group' data-ng-class='{open: open}' style='width: 200px;'>" +
	            "<button class='btn btn-small' style='width: 160px;'>---Select---</button>" +
	            "<button class='btn btn-small btn-primary dropdown-toggle' data-ng-click='openDropdown()' style='width: 40px;' ><span class='caret'></span></button>" +
	            "<ul class='dropdown-menu' aria-labelledby='dropdownMenu' style='position: relative;'>" +
	            "<li style='cursor:pointer;' data-ng-repeat='option in options'><a data-ng-click='toggleSelectItem(option)'><span data-ng-class='getClassName(option)' aria-hidden='true'></span> {{option.name}}</a></li>" +
	            "</ul>" +
	            "</div>",

	        controller: function ($scope) {

	            $scope.openDropdown = function () {

	                $scope.open = !$scope.open;

	            };

	            $scope.selectAll = function () {

	                $scope.model = [];

	                angular.forEach($scope.options, function (item, index) {

	                    $scope.model.push(item.id);

	                });

	            };

	            $scope.deselectAll = function () {

	                $scope.model = [];

	            };

	            $scope.toggleSelectItem = function (option) {

	                var intIndex = -1;

	                angular.forEach($scope.model, function (item, index) {

	                    if (item == option.id) {

	                        intIndex = index;

	                    }

	                });

	                if (intIndex >= 0) {

	                    $scope.model.splice(intIndex, 1);

	                } else {

	                    $scope.model.push(option.id);

	                }

	            };

	            $scope.getClassName = function (option) {

	                var varClassName = 'glyphicon glyphicon-remove-circle';

	                angular.forEach($scope.model, function (item, index) {

	                    if (item == option.id) {

	                        varClassName = 'glyphicon glyphicon-ok-circle';

	                    }

	                });

	                return (varClassName);

	            };

	        }
	    }

	});
