'use strict';

angular.module('wsapp')
    .controller('ApplicationController', function ($scope, $location, applicationService, $state, $cookies) {
        
    	$scope.availableOptions = [ {name : "- Select -", id : "1"}, {name : "Male", id : "2"},{ name : "Female", id : "3"}];
    	$scope.availableNationalities =[
    		"Afghan",
    		"Albanian",
    		"Algerian",
    		"American",
    		"Andorran",
    		"Angolan",
    		"Antiguans",
    		"Argentinean",
    		"Armenian",
    		"Australian",
    		"Austrian",
    		"Azerbaijani",
    		"Bahamian",
    		"Bahraini",
    		"Bangladeshi",
    		"Barbadian",
    		"Barbudans",
    		"Batswana",
    		"Belarusian",
    		"Belgian",
    		"Belizean",
    		"Beninese",
    		"Bhutanese",
    		"Bolivian",
    		"Bosnian",
    		"Brazilian",
    		"British",
    		"Bruneian",
    		"Bulgarian",
    		"Burkinabe",
    		"Burmese",
    		"Burundian",
    		"Cambodian",
    		"Cameroonian",
    		"Canadian",
    		"Cape Verdean",
    		"Central African",
    		"Chadian",
    		"Chilean",
    		"Chinese",
    		"Colombian",
    		"Comoran",
    		"Congolese",
    		"Costa Rican",
    		"Croatian",
    		"Cuban",
    		"Cypriot",
    		"Czech",
    		"Danish",
    		"Djibouti",
    		"Dominican",
    		"Dutch",
    		"East Timorese",
    		"Ecuadorean",
    		"Egyptian",
    		"Emirian",
    		"Equatorial Guinean",
    		"Eritrean",
    		"Estonian",
    		"Ethiopian",
    		"Fijian",
    		"Filipino",
    		"Finnish",
    		"French",
    		"Gabonese",
    		"Gambian",
    		"Georgian",
    		"German",
    		"Ghanaian",
    		"Greek",
    		"Grenadian",
    		"Guatemalan",
    		"Guinea-Bissauan",
    		"Guinean",
    		"Guyanese",
    		"Haitian",
    		"Herzegovinian",
    		"Honduran",
    		"Hungarian",
    		"I-Kiribati",
    		"Icelander",
    		"Indian",
    		"Indonesian",
    		"Iranian",
    		"Iraqi",
    		"Irish",
    		"Israeli",
    		"Italian",
    		"Ivorian",
    		"Jamaican",
    		"Japanese",
    		"Jordanian",
    		"Kazakhstani",
    		"Kenyan",
    		"Kittian and Nevisian",
    		"Kuwaiti",
    		"Kyrgyz",
    		"Laotian",
    		"Latvian",
    		"Lebanese",
    		"Liberian",
    		"Libyan",
    		"Liechtensteiner",
    		"Lithuanian",
    		"Luxembourger",
    		"Macedonian",
    		"Malagasy",
    		"Malawian",
    		"Malaysian",
    		"Maldivan",
    		"Malian",
    		"Maltese",
    		"Marshallese",
    		"Mauritanian",
    		"Mauritian",
    		"Mexican",
    		"Micronesian",
    		"Moldovan",
    		"Monacan",
    		"Mongolian",
    		"Moroccan",
    		"Mosotho",
    		"Motswana",
    		"Mozambican",
    		"Namibian",
    		"Nauruan",
    		"Nepalese",
    		"New Zealander",
    		"Nicaraguan",
    		"Nigerian",
    		"Nigerien",
    		"North Korean",
    		"Northern Irish",
    		"Norwegian",
    		"Omani",
    		"Pakistani",
    		"Palauan",
    		"Panamanian",
    		"Papua New Guinean",
    		"Paraguayan",
    		"Peruvian",
    		"Polish",
    		"Portuguese",
    		"Qatari",
    		"Romanian",
    		"Russian",
    		"Rwandan",
    		"Saint Lucian",
    		"Salvadoran",
    		"Samoan",
    		"San Marinese",
    		"Sao Tomean",
    		"Saudi",
    		"Scottish",
    		"Senegalese",
    		"Serbian",
    		"Seychellois",
    		"Sierra Leonean",
    		"Singaporean",
    		"Slovakian",
    		"Slovenian",
    		"Solomon Islander",
    		"Somali",
    		"South African",
    		"South Korean",
    		"Spanish",
    		"Sri Lankan",
    		"Sudanese",
    		"Surinamer",
    		"Swazi",
    		"Swedish",
    		"Swiss",
    		"Syrian",
    		"Taiwanese",
    		"Tajik",
    		"Tanzanian",
    		"Thai",
    		"Togolese",
    		"Tongan",
    		"Trinidadian or Tobagonian",
    		"Tunisian",
    		"Turkish",
    		"Tuvaluan",
    		"Ugandan",
    		"Ukrainian",
    		"Uruguayan",
    		"Uzbekistani",
    		"Venezuelan",
    		"Vietnamese",
    		"Welsh",
    		"Yemenite",
    		"Zambian",
    		"Zimbabwean"
    		]
    	$scope.student = JSON.parse($cookies.get('student'));
    	var dob = $scope.student.dateOfBirth
    	$scope.date = new Date(Date.parse(dob));
    	console.log($scope.student)
    	
    	$scope.uploadFile = function(files){
    		applicationService.uploadFile($scope.student.id, files[0],
    				function(response){
    					alertify.success("SUCCESS");
    				}
    				,function(response){
    					alertify.error("ERROR");
    				});
    		}
    	
    	
    });