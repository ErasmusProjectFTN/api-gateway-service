angular.module('wsapp')
.service('companyService', function($http){
	return{
		insertCompany: function(data,onSuccess, onError){ // TODO Add parameters here
		console.log(data);
		var req = {
		    method: 'POST',
		    url: '/internship-triple-store-service/company/addCompany', 
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	CompanyCode : data.identifier,
		    	CompanyName: data.companyName,
		    	CompanyAddress: data.companyAddress,
		    	CompanyWebsite: data.companyWebsite,
		    	CompanyDescription : data.companyDescription
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		}
	}
});