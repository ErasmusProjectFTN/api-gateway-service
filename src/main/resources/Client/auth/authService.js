angular.module('wsapp')
.service('authService', function($http){
	return{
		signin: function(username, password, onSuccess, onError){
		
		var req = {
		    method: 'POST',
		    url: '/api/signin',
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	username: username,
		    	password: password 
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		},
		signup: function(username, email, password, onSuccess, onError){

		var req = {
		    method: 'POST',
		    url: '/api/signup',
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	username: username,
		    	email: email,
		    	password: password 
		    })
		}
		
		$http(req).then(onSuccess, onError);

		},
        signout: function(onSuccess, onError){

		var req = {
		    method: 'POST',
		    url: '/api/signout'
		}	

		$http(req).then(onSuccess, onError);

        },
		personalization: function(surname,name,dateOfBirth,countryofBirth,placeOfBirth,gender,nationality,streetAndNumber,postalCode,city,country,telephone,email){
		
		var req = {
		    method: 'POST',
		    url: '/student/add',
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	username: username,
		    	name : name,
				dateOfBirth : dateOfBirth,
				countryofBirth : countryofBirth,
				placeOfBirth : placeOfBirth,
				gender : gender,
				nationality : nationality,
				streetAndNumber : streetAndNumber,
				postalCode : postalCode,
				city : city,
				country : country,
				telephone : telephone,
				email : email
		    })
		}
		
		$http(req).then(onSuccess, onError);

		},
        authenticate: function(onSuccess, onError){
        
        var req = {
		    method: 'POST',
		    url: '/api/authenticate'
		}	

		$http(req).then(onSuccess, onError);


        }
	}
});