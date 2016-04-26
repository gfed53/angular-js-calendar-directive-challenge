angular.module('calendarDemoApp')
.constant('ALL_MONTHS', ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

// Not in use for now
// .factory('caDateConstruct', [caDateConstruct])
// .factory('caRange', ['caDateConstruct', caSubmit])
// .factory('needStyling', [needStyling])
.factory('caIsValid', [caIsValid])

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

function caIsValid() {
	return function(date){
		console.log("working");
		if(date){
			return true
		} 
	}
}