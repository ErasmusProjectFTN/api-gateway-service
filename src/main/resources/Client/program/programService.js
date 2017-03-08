angular.module('wsapp')
.service('programService', function($http){
	return{
		insertInstitution: function(onSuccess, onError){ // TODO Add parameters here
		
		var req = {
		    method: 'POST',
		    url: '//program/add', // here to write a appropriate api
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	name: name
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		}
	}
});