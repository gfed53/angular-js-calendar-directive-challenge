angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('SelectController', SelectController)
.directive('myCalendar', function(){
	return {
		// require: ^?SelectController
		restrict: "E",
		transclude: true,
		templateUrl: "template.html",
		scope: true,
		controller: 'SelectController',
		link: function(scope, element, attrs){
			// console.log(dateConstruct());
			var dateInView = moment()._d;
			console.log(dateInView);
			var calendarInView = CalendarRange.getMonthlyRange(dateInView);
			// console.log(testCalendar);
			console.log(calendarInView.days);
			scope.days = calendarInView.days;
		}
	}
})

function SelectController() {
	var vm = this;
	vm.submit = submit;
	vm.dateConstruct = dateConstruct;

	function submit(){
		console.log(dateConstruct());
		dateConstruct();

		
	}

	function dateConstruct(){
		var dateString = vm.year + " " + vm.month + " 01",
		date = moment(dateString, "YYYY MMM DD");

		console.log(date);
		return date;
	}
};