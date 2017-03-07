angular.module('wsapp')
.service('institutionService', function($http){
	return{
		insertInstitution: function(onSuccess, onError){ // TODO Add parameters here
		
		var req = {
		    method: 'POST',
		    url: '//institution/add', // here to write a appropriate api
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	name: name
		    })
		}	

		$http(req).then(onSuccess, onError);
		
	},
	insertDegree: function(onSuccess, onError){ // TODO Add parameters here

		var req = {
		    method: 'POST',
		    url: '//institution/add',// here to write a appropriate api
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	name: name
		    })
		}	

		$http(req).then(onSuccess, onError);

    },
	insertCourse: function(onSuccess, onError){ // TODO Add parameters here

		var req = {
		    method: 'POST',
		    url: '//institution/add',// here to write a appropriate api
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