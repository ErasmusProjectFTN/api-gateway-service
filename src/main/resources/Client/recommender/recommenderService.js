angular.module('wsapp')
.service('recommenderService', function($http){
	return{
		recommendCourses: function(marks){ 
		//console.log(marks);
		var req = {
		    method: 'POST',
		    url: 'http://localhost:8082/grades/collaborative', 
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    dataType: 'json', 
		    data: "{\"Matematička analiza 1\": \""+marks.MathematicalAnalysis1+"\"," +
		    "\"Algebra\": \""+marks.Algebra+"\"," +
		    "\"Programski jezici i strukture podataka\": \""+marks.ProgrammingLanguagesandDataStructures+"\","+
		    "\"Engleski jezik - osnovni\": \""+marks.EnglishLanguageBasic	+"\","+
		    "\"Engleski jezik - srednji\": \""+marks.EnglishLanguageIntermediate+"\","+
		    "\"Engleski jezik - viši\": \""+marks.EnglishLanguageAdvanced+"\","+
		    "\"Fizika\": \""+marks.Physics+"\","+
		    "\"Osnovi elektrotehnike\": \""+marks.FundamentalsofElectricalEngineering+"\","+
		    "\"Arhitektura računara\": \""+marks.ComputerArchitecture+"\","+
		    "\"Modeliranje i simulacija sistema\": \""+marks.SystemModelingandSimulation+"\","+
		    "\"Logičko projektovanje računarskih sistema 1\": \""+marks.LogicDesignofComputerSystems1+"\","+
		    "\"Matematička analiza 2\": \""+marks.MathematicalAnalysis2+"\","+
		    "\"Objektno programiranje\": \""+marks.ObjectProgramming+"\","+
		    "\"Operativni sistemi\": \""+marks.OperatingSystems+"\","+
		    "\"Sociološki aspekti tehničkog razvoja\": \""+marks.SociologicalAspectsofTechnicalDevelopment+"\","+
		    "\"Sistemi automatskog upravljanja\": \""+marks.AutomaticControlSystems+"\","+
			"\"Sistemska programska podrška u realnom vremenu 1\": \""+marks.RealTimeSystemProgramming1+"\","+
			"\"Verovatnoća i slučajni procesi\": \""+marks.ProbabilityandStochasticProcesses+"\","+
			"\"Metode optimizacije\": \""+marks.OptimizationMethods+"\","+
			"\"Elektronika\": \""+marks.Electronics+"\","+
			"\"Baze podataka 1\": \""+marks.Databases1+"\","+
			"\"Upravljački algoritmi u realnom vremenu\": \""+marks.Realtimecontrolsystems+"\","+
			"\"Osnovi informacionih sistema i softverskog inženjerstva\": \""+marks.FundamentalsofInformationSystemsandSoftwareEngineering+"\","+
			"\"Sistemska programska podrška u realnom vremenu 2\": \""+marks.RealTimeSystemProgramming2+"\","+
			"\"Tehnologije upravljačkih sistema\": \""+marks.ControlSystemsTechnology+"\","+
			"\"Numerički algoritmi i numerički softver\": \""+marks.NumericalAlgorithmsandNumericalSoftware+"\","+
			"\"Osnovi računarskih mreža 1\": \""+marks.FundamentalsofComputerNetworks1+"\","+
			"\"Osnove procesne tehnike i energetike\": \""+marks.FundamentalsofProcessandEnergyEngineering+"\","+
			"\"Programski prevodioci\": \""+marks.Compilers+"\","+
			"\"Osnovi algoritama i struktura DSP-a 1\": \""+marks.FundamentalsofDSPArchitectureandAlgorithms1+"\","+
			"\"Automatika u pametnim stambeno-poslovnim objektima\": \""+marks.Automationinsmartofficeresidentialbuildings+"\","+
			"\"Osnovi računarske inteligencije\": \""+marks.ComputationalIntelligenceFundamentals+"\","+
			"\"Logičko projektovanje računarskih sistema 2\": \""+marks.LogicDesignofComputerSystems2+"\","+
			"\"Projektovanje softvera nadzorno-upravljačkih sistema\": \""+marks.SoftwaredesignforSCADAsystems+"\","+
			"\"Veb programiranje\": \""+marks.WebProgramming+"\","+
			"\"Odabrana poglavlja projektovanja fizičke arhitekture\": \""+marks.SelectedChaptersinPhysicalArchitectureDesign+"\","+
			"\"Električne mašine u automatici\": \""+marks.ElectricalMachinesinAutomaticControlSystems+"\","+
			"\"Interakcija čovek računar\": \""+marks.HumanComputerInteraction+"\","+
			"\"Osnovi algoritama i struktura DSP-a 2\": \""+marks.FundamentalsofDSPArchitectureandAlgorithms2+"\","+
			"\"Geoinformacione tehnologije\": \""+marks.GeospatialTechnologies+"\","+
			"\"Internet mreže\": \""+marks.InternetNetworks+"\","+
			"\"Osnovi računarskih mreža 2\": \""+marks.ComputerNetworkFundamentals2+"\","+
			"\"Tehnologije biomedicinskog inženjeringa\": \""+marks.BiomedicalEngineeringTechnologies+"\","+
			"\"Specifikacija i modeliranje softvera\": \""+marks.SoftwareSpecificationandModeling+"\","+
			"\"Projektovanje namenskih računarskih struktura 1\": \""+marks.DedicatedComputerStructureDesign1+"\","+
			"\"Mikroprocesorski upravljački uređaji\": \""+marks.MicroprocessorBasedControlDevices+"\","+
			"\"Digitalni upravljački sistemi\": \""+marks.DigitalControlSystems+"\","+
			"\"Projektovanje softvera\": \""+marks.SoftwareDesign+"\","+
			"\"Arhitekture i algoritmi DSP-a 1\": \""+marks.DSPArchitectureandAlgorithms1+"\","+
			"\"Projektovanje sistema automatskog upravljanja\": \""+marks.ControlSystemsDesign+"\","+
			"\"Soft kompjuting\": \""+marks.SoftComputing+"\","+
			"\"Programska podrška u televiziji i obradi slike 1\": \""+marks.TelevisionandImageProcessingSoftware1+"\","+
			"\"Osnove biomedicinskog inženjerstva\": \""+marks.FundamentalsofBiomedicalEngineering+"\","+
			"\"Računarska grafika\": \""+marks.ComputerGraphics+"\","+
			"\"Međuračunarske komunikacije i računarske mreže 1\": \""+marks.IntercomputerCommunicationsandComputerNetworks1+"\","+
			"\"Geoinformacioni sistemi\": \""+marks.GeoinformationSystems+"\","+
			"\"Baze podataka 2\": \""+marks.Databases2+"\","+
			"\"Programska podrška u realnom vremenu 1\": \""+marks.RealTimeSoftware1+"\","+
			"\"Tehnička sredstva automatike\": \""+marks.TechnicalEquipmentforControlSystems+"\","+
			"\"Internet softverske arhitekture\": \""+marks.InternetSoftwareArchitectures+"\","+
			"\"Programska podrška u realnom vremenu 2\": \""+marks.RealTimeSoftware2+"\","+
			"\"Primena DSP u upravljanju\": \""+marks.DSPApplicationsinControlSystems+"\","+
			"\"XML i veb servisi\": \""+marks.XMLandWEBServices+"\","+
			"\"Projektovanje namenskih računarskih struktura 2\": \""+marks.DedicatedComputerStructureDesign2+"\","+
			"\"Metode formiranja i analize medicinske slike\": \""+marks.MethodsofMedicalImageFormingandAnalysis+"\","+
			"\"Inženjering informacionih sistema\": \""+marks.InformationSystemEngineering+"\","+
			"\"Sistemi bazirani na znanju\": \""+marks.KnowledgeBasedSystems+"\","+
			"\"Poslovna informatika\": \""+marks.BusinessInformationSystems+"\","+
			"\"Projektovanje sistema zasnovanih na računaru\": \""+marks.EngineeringofComputerBasedSystems+"\","+
			"\"Upravljanje procesima računarom\": \""+marks.ProcessControlbyComputer+"\","+
			"\"Bezbednost u sistemima elektronskog poslovanja\": \""+marks.EBusinessSystemsSecurity+"\","+
			"\"Sistemi baza podataka\": \""+marks.DatabaseSystems+"\","+
			"\"Softverski obrasci i komponente\": \""+marks.SoftwarePatternsandComponents+"\","+
			"\"Agentske tehnologije\": \""+marks.DistributedArtificialIntelligenceandIntelligentAgents+"\","+
			"\"Arhitekture i algoritmi DSP-a 2\": \""+marks.DSPArchitectureandAlgorithms2+"\"}",		 
		}	
		
		console.log(req.data);
		$http(req).then(function successCallback(response) {
			var result_text = "";
			for (i = 0; i < 8; i++) {
				result_text += Object.keys(response.data)[i] + ": " + Object.values(response.data)[i] + 
				"<br>"; 
			}
			$("#resultText").append(result_text);
			$("#result").show();
			
		}, function errorCallback(response){
			alert("ERROR");
		})
		}
	}
});