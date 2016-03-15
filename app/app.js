angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('SelectController', SelectController)
.directive('myCalendar', function(){
	return {
		restrict: "E",
		transclude: true,
		templateUrl: "template.html",
		scope: true,
		controller: function($scope, $element, $attrs){
			var testDate = new Date();
			console.log(testDate);
			var testCalendar = CalendarRange.getMonthlyRange(testDate);
			console.log(testCalendar);
			console.log(testCalendar.days);
			$scope.days = testCalendar.days;
		}
	}
})

function SelectController() {
	var vm = this;
	vm.submit = submit;

	function submit(){
		console.log(dateConstruct());
	}

	function dateConstruct(){
		var date = vm.month + " " + vm.year;
		// console.log(date);
		return date;
	}
};