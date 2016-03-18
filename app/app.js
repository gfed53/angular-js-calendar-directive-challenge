angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('SelectController', [SelectController])
.directive('myCalendar', function(){
	return {
		// require: ^?SelectController
		restrict: "E",
		// transclude: true,
		templateUrl: "template.html",
		scope: true
		// controller: 'SelectController',
		// link: function(scope, element, attrs){

		// 	console.log(scope); 
		// 	// scope.days = vm.days;
		// 	// console.log(scope.days);
		// }
	}
})

function SelectController() {
	var vm = this;
	vm.submit = submit;
	vm.dateConstruct = dateConstruct;
	vm.range = CalendarRange.getMonthlyRange(moment()._d);
	vm.days = vm.range.days;
	vm.start = vm.range.start;
	vm.needStyling = needStyling;

	function submit(){
		// console.log(dateConstruct());
		var date = dateConstruct();
		vm.range = CalendarRange.getMonthlyRange(date);
		console.log(vm.range);
		vm.days = vm.range.days;
		console.log(vm.range.start);
		var foo = moment(vm.range.start);
		console.log(foo);
		console.log(foo.valueOf());
		// caStyleCalendar(vm.range);
		
	}

	function dateConstruct(){
		var dateString = vm.year + " " + vm.month + " 01",
		date = moment(dateString, "YYYY MMM DD")._d;

		console.log(date);
		return date;
	}

	function needStyling(item){
		var start = moment(vm.range.start),
		end = moment(vm.range.end);
		if(moment(item.date).isBefore(start) || moment(item.date).isAfter(end)) {
				return true;
			}
	}
};



