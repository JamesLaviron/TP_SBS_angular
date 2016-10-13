angular.module('adminApp').controller('eventCtrl',eventCtrlFnc);

eventCtrlFnc.$inject=['$scope','$log','factory'];

function eventCtrlFnc($scope,$log,factory){

	var presentation = $scope.currentPresentation;
	$log.info(presentation);
	$scope.newSlide = function(){
		var content = factory.contentCreation("contentTitle","image","/images/Mur.png");
		var slid = factory.slidCreation("slidTitle","slidTxt");
		var arraycontent = factory.mapToArray(content);
		slid.contentMap.push(arraycontent);
		var json1 = JSON.stringify( slid,null,2);
		alert(json1);
		var presentationObj = factory.presentationCreation("PresTitle","PresDescr");
		var json = JSON.stringify( presentationObj,null,2);
		alert(json);
	}
	return "qsdk";
};