'use strict';

angular.module('wsapp')
    .config(function ($stateProvider) {
        $stateProvider
	    $stateProvider
	    .state('internship', {
	                   url: '/internship',
	                   views: {
	                       'content': {
	                           templateUrl: 'internship/internship.html',
	                           controller: 'InternshipController'
	                       },
	                       'navbar':{
	                           templateUrl: 'navbar/navbar.html',
	                           controller: 'NavbarController'
	                       }
	                   }
	               }
	    ).state('internshipInfo',{
							url: '/internshipInfo',
					   		views: {
					            'content': {
					                templateUrl: 'internship/internship_info.html',
					                controller: 'InternshipInfoController'
					            },
					            'navbar':{
					                templateUrl: 'navbar/navbar.html',
					                controller: 'NavbarController'
					            }
					   		},
					   		params: {internship: null}
						}
	    ).state('companyInfo',{
			url: '/companyInfo',
				views: {
		        'content': {
		            templateUrl: 'internship/company_info.html',
		            controller: 'CompanyInfoController'
		        },
		        'navbar':{
		            templateUrl: 'navbar/navbar.html',
		            controller: 'NavbarController'
		        }
				},
				params: {company: null}
		}).state('knowledgeInfo',{
			url: '/knowledgeInfo',
			views: {
	        'content': {
	            templateUrl: 'internship/knowledge_info.html',
	            controller: 'KnowledgeInfoController'
	        },
	        'navbar':{
	            templateUrl: 'navbar/navbar.html',
	            controller: 'NavbarController'
	        }
			},
			params: {knowledge: null}
	})
    });
