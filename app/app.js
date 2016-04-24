angular.module('calendarDemoApp', [])

.controller('SelectController', ['ALL_MONTHS', SelectController])
.directive('myCalendar', function(){
	return {
		restrict: "E",
		templateUrl: "template.html",
		scope: true,
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

	function submit(){
		var date = dateConstruct();
		vm.range = CalendarRange.getMonthlyRange(date);
		vm.days = vm.range.days;		
	}

	function dateConstruct(){
		var dateString = vm.year + " " + vm.month + " 01",
		date = moment(dateString, "YYYY MMM DD")._d;
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



