var app = angular.module('myApp', []);

app.controller('myController', function($scope){
	$scope.name = "Hasib Al Muhaimin";
	$scope.id = "151 0720 042";
	$scope.section = 18;
	$scope.faculty = "AMK";
	$scope.course = "Computer Concepts";
	

	$scope.getCurrentDate = function(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if(dd < 10)
		{
			dd = "0" + dd;
		}

		if(mm < 10)
		{
			mm = "0" + mm;
		}

		return dd + "/" + mm + "/" + yyyy;
	}

	$scope.date = $scope.getCurrentDate();

	$scope.taskList = ["Tower of Hanoi", "Printing a Diamond"];
});