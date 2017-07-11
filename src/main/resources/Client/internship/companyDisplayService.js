angular.module('wsapp')
.service('companyDisplayService', function($http, $uibModal){
	
		this.loadCompanies= function(onSuccess, onError){ 
		
			var req = {
			    method: 'GET',
			    url: '/internship-triple-store-service/company/getCompanies', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.deleteCompany= function(institution){
			var req = {
					method: 'DELETE',
					url: '/internship-triple-store-service/company/removeCompany', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {CompanyCode: institution}
				}
			return $http(req).then(function(response){
				return response;
			});
		}

		this.searchCompany= function(institution){
			var req = {
					method: 'GET',
					url: '/internship-triple-store-service/company/searchCompanies', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {company: institution}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		

		this.loadCompany= function(identifier){
			var req = {
				method: 'GET',
				url: '/internship-triple-store-service/company/getCompany',
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