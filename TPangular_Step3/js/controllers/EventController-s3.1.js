angular.module('adminApp').controller('eventCtrl',eventCtrlFnc);

eventCtrlFnc.$inject=['$scope','$log','factory'];
function eventCtrlFnc($scope,$log,factory){

	var presentation = factory.presentationCreation("prestTitle", "presDescr");
	// $scope.currentPresentation = [];
	// $scope.currentPresentation.slid = [];


	$scope.newSlid = function(){
		var content = factory.contentCreation("contentTitle","image","images/mini.jpg");
		var slid = factory.slidCreation("slidTitle","slidTxt");
		var arraycontent = factory.mapToArray(content);
		slid.contentMap = content;
		// slid.contentMap = arraycontent;
		//var json1 = JSON.stringify( slid,null,2);
		//alert(json1);
		// $scope.currentPresentation.slid.push(slid);
		presentation.slidArray.push(slid);
		$scope.currentPresentation = presentation;

	}

	$scope.selectCurrentSlid=function(slid){
		$scope.currentSlid=slid;
	}
	$scope.isSlidContentEmpty=function(slid){
		if(slid.contentMap[1]== undefined){
			return true;
		}
		return false
	}
	return "qsdk";
};