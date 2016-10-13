angular.module('authService', []).service('auth',authFnc);

authFnc.$inject=['$http','$q'];

function authFnc($http, $q) {
	
	var userMap={};
	userMap['jdoe']='jdoepwd';
	userMap['psmith']='psmithpwd';
	userMap['tp']='tp';
	userMap['tpwatcher']={'pwd':'tp','role':'watcher'};
	userMap['tpadmin']={'pwd':'tp','role':'admin'};
	
	var fncContainer={
		localAuthAsk:localAuthAsk
	};
	
	function localAuthAsk(login,pwd){
		var deferred = $q.defer();
		setInterval(function(login,pwd){
			if( userMap[login].pwd==pwd){
				var data={'login':login,'role':userMap[login].role,'validAuth':true};
				deferred.resolve(data);
			}else{
				deferred.reject(status);
			}
			clearInterval(this);
		},3000,login,pwd);
		
		return deferred.promise;
	}

	function auhAsk(){
		//ASYNC
		var deferred = $q.defer();

	//HTTP REQUEST
	//Configuration request
	var url = "/fakeauthwatcher";
	var data = {'login':login,'pwd':pwd};
	//http request to LOL API
	$http.post(url,data).success(function(data, status, headers, config) {
	//TODO
	deferred.resolve(data);
}).
	error(function(data, status, headers, config) {
	//TODO
	deffered.reject(status);	
	// or server returns response with an error status.
});

	return deferred.promise();
}

return fncContainer;
}