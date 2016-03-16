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
		// controller: 'SelectController',
		link: function(scope, element, attrs){
			console.log("Link function running");
		}
	}
})

function SelectController() {
	var vm = this;
	vm.submit = submit;
	vm.dateConstruct = dateConstruct;
	vm.days = CalendarRange.getMonthlyRange(moment()._d).days;

	function submit(){
		console.log(dateConstruct());
		var days = dateConstruct();
		vm.days = CalendarRange.getMonthlyRange(days).days;
		
	}

	function dateConstruct(){
		var dateString = vm.year + " " + vm.month + " 01",
		date = moment(dateString, "YYYY MMM DD")._d;

		console.log(date);
		return date;
	}
};