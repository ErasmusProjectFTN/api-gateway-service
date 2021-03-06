angular.module('wsapp')
.service('authService', function($http){
	return{
		signin: function(username, password, onSuccess, onError){
		
		var req = {
		    method: 'POST',
		    url: '/triple-store-service/student/signin',
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
        signout: function(onSuccess, onError){

		var req = {
		    method: 'POST',
		    url: '/api/signout'
		}	

		$http(req).then(onSuccess, onError);

        },
		personalisation: function(
				surname,
				name,
				dateOfBirth,
				countryOfBirth,
				placeOfBirth,
				gender,
				nationality,
				streetAndNumber,
				postalCode,
				city,
				country,
				telephone,
				email,
				password,
				passwordConfirmation,
				onSuccess, 
				onError){
		
			
			
		var req = {
		    method: 'POST',
		    url: '/triple-store-service/student/add',
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	surname: surname,
		    	name : name,
				dateOfBirth : dateOfBirth.toString(),
				countryOfBirth : countryOfBirth,
				placeOfBirth : placeOfBirth,
				gender : gender,
				nationality : nationality,
				streetAndNumber : streetAndNumber,
				postalCode : postalCode,
				city : city,
				country : country,
				telephone : telephone,
				email : email,
				password: password
		    })
		}
		
		$http(req).then(onSuccess, onError);

		},
        fileUpload: function(data,myFile,onSuccess, onError){
			var fd = new FormData();
			var file = myFile;
        	console.log('file is ' );
        	console.dir(file);
			fd.append('userid',data.userid);
			fd.append('file', file);
		var req = {
		    method: 'POST',
		    url: '/file-storage-service/storage/user/pdf',
		    headers: {
		        'Content-Type': undefined
		    },
		    data: fd
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