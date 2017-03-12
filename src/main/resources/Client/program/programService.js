angular.module('wsapp')
.service('programService', function($http){
	return{
		addProgrammeInstance: function(data,onSuccess, onError){ // TODO Add parameters here
		
		var req = {
		    method: 'POST',
		    url: '/ects/addProgrammeInstance', 
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	degreeUnitCode : degreeUnitCode,
				prerequisite : prerequisite,
				departmentalEctsCoordinator : departmentalEctsCoordinator,
				degreeProgrammeFinalExamination : degreeProgrammeFinalExamination,
				location : location,
				url : url,
				places : places,
				languageOfInstruction : languageOfInstruction,
				degreeProgrammeExaminationAndAssessmentRegulations : degreeProgrammeExaminationAndAssessmentRegulations,
				start : start,
				duration : duration,
				cost : cost
		    })
		}	

		$http(req).then(onSuccess, onError);
		
		}
	}
});