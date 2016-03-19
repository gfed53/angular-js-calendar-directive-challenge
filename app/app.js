angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('SelectController', ['ALL_MONTHS', SelectController])
.directive('myCalendar', function(){
	return {
		restrict: "E",
		templateUrl: "template.html",
		scope: true,
		link: function(scope, element, attrs){

			console.log(scope); 
			// scope.days = vm.days;
			// console.log(scope.days);
		}
	}
})

function SelectController(ALL_MONTHS) {
	var vm = this;
	vm.submit = submit;
	vm.dateConstruct = dateConstruct;
	vm.range = CalendarRange.getMonthlyRange(moment()._d);
	vm.days = vm.range.days;
	vm.start = vm.range.start;
	vm.needStyling = needStyling;
	vm.monthChoices = ALL_MONTHS;
	console.log(vm.monthChoices);

	function submit(){
		// console.log(dateConstruct());
		var date = dateConstruct();
		console.log(date);
		// if(date==="Invalid Date"){
		// 	alert("Please input a valid month and year 20 years before or after the current year!");
		// } else{
			vm.range = CalendarRange.getMonthlyRange(date);
			console.log(vm.range);
			vm.days = vm.range.days;
		// }		
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



