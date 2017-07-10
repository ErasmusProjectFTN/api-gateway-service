angular.module('wsapp')
.service('knowledgeDisplayService', function($http, $uibModal){
	
		this.loadKnowledges= function(onSuccess, onError){ 
		
			var req = {
			    method: 'GET',
			    url: '/internship-triple-store-service/knowledge/getKnowledges', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.loadKnowledge = function(identifier){
			var req = {
				method: 'GET',
				url: '/internship-triple-store-service/knowledge/getKnowledge',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params: {identifier: identifier}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}

		this.searchKnowledge= function(institution){
			var req = {
					method: 'GET',
					url: '/internship-triple-store-service/knowledge/searchKnowledge', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {knowledge: institution}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.bindKnowledge= function(internship,knowledge){
			var req = {
					method: 'POST',
					url: '/internship-triple-store-service/knowledge/bindKnowledge', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: $.param({ 
						internship: internship,
						Knowledge: knowledge
							})
				}
			return $http(req).then(function(response){
				return response;
			});
		}
		this.dependKnowledge= function(parentKnowledge,sonKnowledge){
			var req = {
					method: 'POST',
					url: '/internship-triple-store-service/knowledge/dependKnowledge', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: $.param({ 
						parentKnowledge: parentKnowledge,
						sonKnowledge: sonKnowledge
							})
				}
			return $http(req).then(function(response){
				return response;
			});
		}
		this.parentKnowledge= function(parentKnowledge,sonKnowledge){
			var req = {
					method: 'POST',
					url: '/internship-triple-store-service/knowledge/parentKnowledge', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: $.param({ 
						parentKnowledge: parentKnowledge,
						sonKnowledge: sonKnowledge
							})
				}
			return $http(req).then(function(response){
				return response;
			});
		}
});
		
		