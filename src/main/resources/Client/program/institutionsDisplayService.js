angular.module('wsapp')
.service('institutionsDisplayService', function($http, $uibModal){
	
	
		// institutions
		this.loadInstitutions = function(onSuccess, onError){ 
		
			var req = {
			    method: 'GET',
			    url: '/triple-store-service/ects/getInstitutions', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    }
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadInstitution = function(identifier){ 
			var req = {
			    method: 'GET',
			    url: '/triple-store-service/ects/getInstitution', 
			    headers: {
			        'Content-Type': 'application/x-www-form-urlencoded'
			    },
			    params: {identifier: identifier}
			}	
			return $http(req).then(function(response){
				return response.data;
			});
		}

		this.searchInstitutions = function(institution){
			var req = {
					method: 'GET',
					url: '/triple-store-service/ects/searchInstitutions', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {institution: institution}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		//modify institution
		this.modifyInstitution = function(institution, onSuccess, onError){
			var req = {
				    method: 'POST',
				    url: '/triple-store-service/ects/modifyInstitution', 
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
		}
		
		// programmes
		this.loadProgrammes = function(onSuccess, onError){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getProgrammes',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		

		this.loadProgramme = function(identifier){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getProgramme',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params: {identifier: identifier}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.loadInternshipRecommendations=function(identifier){
			var req = {
					method: 'GET',
					url: '/internship-triple-store-service/internship/getRecommendation',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {identifier: identifier}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		this.searchProgrammes = function(programme){
			var req = {
					method: 'GET',
					url: '/triple-store-service/ects/searchProgrammes', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {programme: programme}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.modifyProgramme = function(data, onSuccess, onError){
			var req = {
				    method: 'POST',
				    url: '/triple-store-service/ects/modifyDegreeProgramme',
					headers: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    data: $.param({ 
				    	degreeUnitCode : data.degreeUnitCode,
						degreeProgrammeTitle : data.degreeProgrammeTitle,
						location : data.location,
						qualification : data.qualification,
						url : data.url,
						credit : data.credit,
						degreeProgrammeAccessToFurtherStudies : data.degreeProgrammeAccessToFurtherStudies,
						degreeProgrammeEducationalAndProfessionalGoals : data.degreeProgrammeEducationalAndProfessionalGoals,
						degreeProgrammeStructureDiagram : data.degreeProgrammeStructureDiagram,
						prerequisite : data.prerequisite,
						departmentalEctsCoordinator : data.departmentalEctsCoordinator,
						degreeProgrammeFinalExamination : data.degreeProgrammeFinalExaminaton,
						places : data.places,
						languageOfInstruction : data.languageOfInstruction,
						degreeProgrammeExaminationAndAssessmentRegulations : data.degreeProgrammeExaminationAndAssessmentRegulations,
						start : data.start,
						duration : data.duration,
						cost : data.cost
				    
				    })
				}	

				$http(req).then(onSuccess, onError);
		}
		
		// courses 
		this.loadCourses = function(onSuccess, onError){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getCourses',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}
		
		this.loadCourse = function(identifier){
			var req = {
				method: 'GET',
				url: '/triple-store-service/ects/getCourse',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params: {identifier: identifier}
			}
			return $http(req).then(function(response){
				return response.data;
			});
		}

                this.searchCourses = function(course){
			var req = {
					method: 'GET',
					url: '/triple-store-service/ects/searchCourses', 
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					params: {course: course}
				}
			return $http(req).then(function(response){
				return response.data;
			});
		}
                
        this.modifyCourse = function(data, onSuccess, onError){
        	var req = {
        		    method: 'POST',
        		    url: '/triple-store-service/ects/modifyCourseUnit',
        			headers: {
        		        'Content-Type': 'application/x-www-form-urlencoded'
        		    },
        		    data: $.param({ 
        		    	courseUnitCode : data.courseUnitCode,
        				courseUnitTitle : data.courseUnitTitle,
        				courseUnitType : data.courseUnitType,
        				courseUnitLevel : data.courseUnitLevel,
        				url : data.url,
        				courseUnitYearOfStudy : data.unitYearOfStudy,
        				credit : data.credit,
        				courseUnitContent : data.courseUnitContent,
        				courseLocation : data.location,
        				lecturer : data.lecturer,
        				languageOfInstruction : data.languageOfInstruction,
        				places : data.places,
        				courseUnitTermPattern : data.selectedOption,
        				courseUnitCompetence : data.courseUnitCompetence,
        				courseUnitLearningOutcome : data.courseUnitLearningOutcome,
        				prerequisite : data.prerequisite,
        				courseUnitRecommendedReading : data.courseUnitRecommendedReading,
        				courseUnitTeachingMethods : data.courseUnitTeachingMethods,
        				courseUnitAssessmentMethods : data.courseUnitAssessmentMethods,
        				start : data.start,
        				duration : data.duration,
        				cost : data.cost
        		    })
        		}	

        		$http(req).then(onSuccess, onError);
        }
	
});