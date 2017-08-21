angular.module('wsapp')
.service('applicationService', function($http){
	return{
		uploadFile: function(userid,myFile,onSuccess, onError){
			var fd = new FormData();
			var file = myFile;
        	console.log('file is ' );
        	console.dir(file);
			fd.append('userid',userid);
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

		}
	}
});