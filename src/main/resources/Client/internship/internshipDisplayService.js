angular.module('wsapp')
.service('internshipDisplayService', function($http, $uibModal){
	
		this.loadInternships = function(onSuccess, onError){ 
		
			var req = {
			    method: 'GET',
			    url: '/internship-triple-store-service/internship/getInternships', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.loadCompany = function(institution){
			var req = {
					method: 'GET',
					url: '/internship-triple-store-service/internship/getParentCompany', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {internship: institution}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}

		this.searchInternship = function(institution){
			var req = {
					method: 'GET',
					url: '/internship-triple-store-service/internship/searchInternships', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {internship: institution}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		

		this.loadInternship = function(identifier){
			var req = {
				method: 'GET',
				url: '/internship-triple-store-service/internship/getInternship',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params: {identifier: identifier}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
             
});
	
