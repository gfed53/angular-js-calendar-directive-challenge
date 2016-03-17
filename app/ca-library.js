angular.module('calendarDemoApp')

// Not in use for now
.factory('caDateConstruct', [caDateConstruct])
.factory('caRange', ['caDateConstruct', caSubmit])
// .factory('needStyling', [needStyling])

function caDateConstruct(){
	return function(year, month){
		var dateString = year + " " + month + " 01",
		date = moment(dateString, "YYYY MMM DD")._d;

		console.log(date);
		return date;
	}
}

function caRange(caDateConstruct){
	return function(year, month){
		var date = dateConstruct(year, month),
		range = CalendarRange.getMonthlyRange(date);
		return {
			range: range,
			days: range.days
		}
	}
}