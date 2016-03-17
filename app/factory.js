angular.module('calendarDemoApp')

// Not in use for now
.factory('caStyleCalendar', caStyleCalendar)

function caStyleCalendar(){
	return function(range){
		console.log("running");
		var start = Date.parse(range.start),
		end = Date.parse(range.end);
		console.log(start);
		for(i=0; i<range.days.length; i++){
			console.log(Date.parse(range.days[i].date));
			if(Date.parse(range.days[i].date)<start || Date.parse(range.days[i].date)>end) {
				console.log(range.days[i].date+"should be styled");
			}
		}
	}
}