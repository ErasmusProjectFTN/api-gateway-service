angular.module('wsapp')
.service('institutionService', function($http){
	return{
		insertInstitution: function(institution,onSuccess, onError){ 
		
		var req = {
		    method: 'POST',
		    url: '/triple-store-service/ects/addInstitution', 
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	identifier : institution.identifier, 
				institutionName : institution.institutionName,
				institutionalECTScoordinator : institution.institutionalECTScoordinator,
				institutionStatus : institution.institutionStatus,
				institutionType : institution.institutionType,
				institutionAddress : institution.institutionAddress,
				url : institution.url, 
				institutionMainUniversityRegulations : institution.institutionMainUniversityRegulations, 
				institutionGeneralDescription : institution.institutionGeneralDescription,
				institutionAcademicAuthorities : institution.institutionAcademicAuthorities,
				institutionAcademicCalendar : institution.institutionAcademicCalendar,
				institutionAdmissionProcedures : institution.institutionAdmissionProcedures,
				generalInformationForStudents : institution.generalInformationForStudents,
				generalInformationForMobileStudents : institution.generalInformationForMobileStudents,
				generalInformationOnAccommodation : institution.generalInformationOnAccommodation,
				generalInformationOnCostOfLiving : institution.generalInformationOnCostOfLiving,
				generalInformationOnExtramuralAndLeisureFacilities : institution.generalInformationOnExtramuralAndLeisureFacilities,
				generalInformationOnFacilitiesForStudentsWithSpecialNeeds : institution.generalInformationOnFacilitiesForStudentsWithSpecialNeeds,
				generalInformationOnFinancialSupport : institution.generalInformationOnFinancialSupport,
				generalInformationOnInsurance : institution.generalInformationOnInsurance,
				generalInformationOnInternationalProgrammes : institution.generalInformationOnInternationalProgrammes,
				generalInformationOnInternships : institution.generalInformationOnInternships,
				generalInformationOnLanguageCourses : institution.generalInformationOnLanguageCourses,
				generalInformationOnMeals : institution.generalInformationOnMeals,
				generalInformationOnMedicalFacilities : institution.generalInformationOnMedicalFacilities,
				generalInformationOnSportsFacilities : institution.generalInformationOnSportsFacilities,
				generalInformationOnStudentAffairsOffice : institution.generalInformationOnStudentAffairsOffice,
				generalInformationOnStudentAssociations : institution.generalInformationOnStudentAssociations,
				generalInformationOnStudyFacilities : institution.generalInformationOnStudyFacilities
		    })
		}	

		$http(req).then(onSuccess, onError);
		
	},
	insertDegree: function(data,onSuccess, onError){ 

		var req = {
		    method: 'POST',
		    url: '/triple-store-service/ects/addDegreeProgramme',
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	degreeUnitCode : data.degreeunitcode,
				degreeProgrammeTitle : data.degreeprogrammetitle,
				location : data.location,
				qualification : data.qualification,
				url : data.url,
				credit : data.credit,
				degreeProgrammeAccessToFurtherStudies : data.degreeprogrammeaccesstofurtherstudies,
				degreeProgrammeEducationalAndProfessionalGoals : data.degreeprogrammeeducationalandprofessionalgoals,
				degreeProgrammeStructureDiagram : data.degreeprogrammestructurediagram,
				prerequisite : data.prerequisite,
				departmentalEctsCoordinator : data.departmentalectscoordinator,
				degreeProgrammeFinalExamination : data.degreeprogrammefinalexaminaton,
				places : data.places,
				languageOfInstruction : data.languageofinstruction,
				degreeProgrammeExaminationAndAssessmentRegulations : data.degreeprogrammeexaminationandassessmentregulations,
				start : data.start,
				duration : data.duration,
				cost : data.cost
		    
		    })
		}	

		$http(req).then(onSuccess, onError);

    },
	insertCourseUnit: function(data,onSuccess, onError){ 

		var req = {
		    method: 'POST',
		    url: '/triple-store-service/ects/addCourseUnit',
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: $.param({ 
		    	courseUnitCode : data.courseunitcode,
				courseUnitTitle : data.courseunittitle,
				courseUnitType : data.courseunittype,
				courseUnitLevel : data.courseunitlevel,
				url : data.url,
				courseUnitYearOfStudy : data.unityearofstudy,
				credit : data.credit,
				courseUnitContent : data.courseunitcontent,
				courseLocation : data.location,
				lecturer : data.lecturer,
				languageOfInstruction : data.languageofinstruction,
				places : data.places,
				courseUnitTermPattern : data.selectedOption,
				courseUnitCompetence : data.courseunitcompetence,
				courseUnitLearningOutcome : data.courseunitlearningoutcome,
				prerequisite : data.prerequisite,
				courseUnitRecommendedReading : data.courseunitrecommendedreading,
				courseUnitTeachingMethods : data.courseunitteachingmethods,
				courseUnitAssessmentMethods : data.courseunitassessmentmethods,
				start : data.start,
				duration : data.duration,
				cost : data.cost
		    })
		}	

		$http(req).then(onSuccess, onError);

    }

	}
});