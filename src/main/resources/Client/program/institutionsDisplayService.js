angular.module('wsapp')
.service('institutionsDisplayService', function($http){
	
		this.loadInstitutions = function(onSuccess, onError){ 
		
			
			console.log('im here')
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
	
});