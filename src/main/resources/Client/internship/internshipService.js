angular.module('wsapp')
.service('internshipService', function($http){
	return{
		insertInternship: function(data,selectedCompany,onSuccess, onError){ // TODO Add parameters here
		console.log(data);
		var req = {
		    method: 'POST',
		    url: '/internship-triple-store-service/internship/addInternship', 
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	InternshipCode : data.identifier,
		    	InternshipTitle : data.internshipTitle,
		    	InternshipPositionTitle : data.internshipDescription,
		    	InternshipDescription : data.internshipPositionTitle,
		    	Company:selectedCompany
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		}
	}
});