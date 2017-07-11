'use strict';

angular.module('wsapp')
    .controller('CompanyDisplayController', function ($scope, $location, companyDisplayService, $state) {
        
        $scope.companies = [];
        
        companyDisplayService.loadCompanies().then(function(response){
                $scope.companies.lenght = 0;
                angular.extend($scope.companies, response);
    	});
    	
    	$scope.showCompany = function(identifier){
    		console.log(identifier)
    		//get course information
    		companyDisplayService.loadCompany(identifier).then(function(response){
    			console.log(response);
        		$state.go('companyInfo', {company:response});
    		});
    	}

        $scope.search = function(company){
                console.log(company);
                companyDisplayService.searchCompany(company).then(function(response){
                    console.log(response);
                    $scope.companies = response;
                    //$scope.courses.lenght = 0;
                    //angular.extend($scope.courses, response);
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
        }
        
    })
    .controller('CompanyInfoController',function($scope,internshipDisplayService,companyDisplayService,$state, $stateParams){
		console.log($stateParams.company);
		$scope.company = $stateParams.company;
		$scope.deleteCompany= function(identifier){
			companyDisplayService.deleteCompany(identifier).then(function(response){
    			console.log(response);
        		$state.go('home');
    		});
    	}
		$scope.showInternship = function(identifier){
    		console.log(identifier)
    		//get course information
    		internshipDisplayService.loadInternship(identifier).then(function(response){
    			console.log(response);
        		$state.go('internshipInfo', {internship:response});
    		});
    	}
	});
