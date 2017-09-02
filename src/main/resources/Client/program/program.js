'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
	    $stateProvider
	    .state('program', {
	                   url: '/program',
	                   views: {
	                       'content': {
	                           templateUrl: 'program/program.html',
	                           controller: 'ProgramController'
	                       },
	                       'navbar':{
	                           templateUrl: 'navbar/navbar.html',
	                           controller: 'NavbarController'
	                       }
	                   }
	               }
	    )
	    .state('appliedStudents',{
	    				url: '/appliedStudents',
	    				views: {
	    					'content' : {
	    						templateUrl: 'program/applied_students.html',
	    						controller: 'AppliedStudentsController'
	    					},
	    					'navbar' :{
	    						templateUrl: 'navbar/navbar.html',
	    						controller: 'NavbarController'
	    					}
	    				}
	    })
	    .state('myApplications',{
	    				url: '/myApplications',
	    				views: {
	    					'content' : {
	    						templateUrl: 'application/my_applications.html',
	    						controller: 'ApplicationsController'
	    					},
	    					'navbar' :{
	    						templateUrl: 'navbar/navbar.html',
	    						controller: 'NavbarController'
	    					}
	    				}
	    })
	    .state('institutionInfo',{
	    				url: '/institutionInfo',
				   		views: {
				            'content': {
				                templateUrl: 'program/institution_info.html',
				                controller: 'InstitutionInfoController'
				            },
				            'navbar':{
				                templateUrl: 'navbar/navbar.html',
				                controller: 'NavbarController'
				            }
				   		},
				   		params: {institution: null}
	    })
	    .state('degreeProgrammeInfo',{
	    				url: '/degreeProgrammeInfo',
				   		views: {
				            'content': {
				                templateUrl: 'program/degree_programme_info.html',
				                controller: 'DegreeProgrammeInfoController'
				            },
				            'navbar':{
				                templateUrl: 'navbar/navbar.html',
				                controller: 'NavbarController'
				            }
				   		},
				   		params: {degreeProgramme: null}
	    })
	    .state('courseInfo',{
			url: '/courseInfo',
	   		views: {
	            'content': {
	                templateUrl: 'program/course_info.html',
	                controller: 'CourseInfoController'
	            },
	            'navbar':{
	                templateUrl: 'navbar/navbar.html',
	                controller: 'NavbarController'
	            }
	   		},
	   		params: {course: null}
	    })
        .state('application', {
                url: '/application',
                views: {
                    'content': {
                        templateUrl: 'application/application.html',
                        controller: 'ApplicationController'
                    },
                    'navbar':{
                        templateUrl: 'navbar/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                params:{programmeId:null}
           })
           .state('modifyInstitution',{
	    				url: '/modifyInstitution',
				   		views: {
				            'content': {
				                templateUrl: 'institution/modifyInstitution.html',
				                controller: 'InstitutionModifyController'
				            },
				            'navbar':{
				                templateUrl: 'navbar/navbar.html',
				                controller: 'NavbarController'
				            }
				   		},
				   		params: {institution: null}
	    })
	    .state('modifyDegree',{
	    				url: '/modifyDegree',
				   		views: {
				            'content': {
				                templateUrl: 'institution/modifyDegree.html',
				                controller: 'DegreeModifyController'
				            },
				            'navbar':{
				                templateUrl: 'navbar/navbar.html',
				                controller: 'NavbarController'
				            }
				   		},
				   		params: {programme: null}
	    })
	    .state('modifyCourse',{
	    				url: '/modifyCourse',
				   		views: {
				            'content': {
				                templateUrl: 'institution/modifyCourse.html',
				                controller: 'CourseModifyController'
				            },
				            'navbar':{
				                templateUrl: 'navbar/navbar.html',
				                controller: 'NavbarController'
				            }
				   		},
				   		params: {course: null}
	    });
    });
