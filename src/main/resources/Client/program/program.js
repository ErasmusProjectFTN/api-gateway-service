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
});
    });
