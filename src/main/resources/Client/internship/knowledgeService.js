angular.module('wsapp')
.service('knowledgeService', function($http){
	return{
		insertKnowledge: function(data,onSuccess, onError){ // TODO Add parameters here
		console.log(data);
		var req = {
		    method: 'POST',
		    url: '/internship-triple-store-service/knowledge/addKnowledge', 
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	Code : data.identifier,
		    	Name: data.knowledgeName,
		    	Description: data.knowledgeDescription,
		    	LaboratoryRequirements:data.lab,
		    	PracticalApplications: data.practicalApplications,
		    	RequiredTeachingCredentials: data.requiredTeachingCredentials,
		    	NotableLiterature: data.notableLiterature,
		    	NotableContributors : data.notableContributors
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		}
	}
});