angular.module('wsapp')
.service('institutionsDisplayService', function($http, $uibModal){
	
		this.loadInstitutions = function(onSuccess, onError){ 
		
			var req = {
			    method: 'GET',
			    url: '/triple-store-service/ects/getInstitutions', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadProgrammes = function(onSuccess, onError){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getProgrammes',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadCourses = function(onSuccess, onError){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getCourses',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadInstitution = function(identifier){ 
			var req = {
			    method: 'GET',
			    url: '/triple-store-service/ects/getInstitution', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    },
			    params: {identifier: identifier}
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadProgramme = function(identifier){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getProgramme',
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