angular.module('wsapp')
.service('authService', function($http){
	return{
		insertSubject: function(name,onSuccess, onError){
		
		var req = {
		    method: 'POST',
		    url: '//student/add', // here to write a appropriate api
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