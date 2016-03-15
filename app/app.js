angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('myCalendar', function(){
	return {
		restrict: "E",
		transclude: true,
		templateUrl: "template.html",
		scope: true,
		controller: function($scope, $element, $attrs){
			var testDate = new Date();
			var testCalendar = CalendarRange.getMonthlyRange(testDate);
			console.log(testCalendar.days);
			$scope.days = testCalendar.days;
		}
	}
})