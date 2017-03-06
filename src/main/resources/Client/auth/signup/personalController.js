'use strict';

angular.module('wsapp')
    .controller('PersonalController', function ($scope, authService, $location) {
        
        $scope.data = {};
 		$scope.data.selectedOption = "2";
        $scope.data.availableOptions = [ {name : "- Select -", id : "1"}, {name : "Male", id : "2"},{ name : "Female", id : "3"}];
        $scope.data.availableNationalities =[
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
    //alertify.success("next");

        authService.personalization($scope.data.familyname,$scope.data.givenname,$scope.data.dateofbirth,$scope.data.countryofbirth,$scope.data.placeofbirth,$scope.data.selectedOption,$scope.data.nationality1,$scope.street,$scope.postalcode,$scope.city,$scope.country,$scope.telephone,$scope.mail,
        			   function(response){

        				   console.log(response.data);
        				   //if(response.data.success==true){
        				   	alertify.success("WELCOME!");
        				   	$state.go('home');
        				   //}else{
        				   	//alertify.error("ERROR");
        				   //}

        			   }
        			   ,function(response){

        					console.log(response.data);
        					alertify.error("ERROR");

        			   });
    });