describe('calendarDemoApp', function(){
	// var scope,
	// 	element,
	// 	compiled,
	// 	html
	beforeEach(module("calendarDemoApp"));
	beforeEach(module('template.html'));
	// beforeEach(inject(function($rootScope, $compile){
		// 	html = "<my-calendar></my-calendar>";
		// 	scope = $rootScope.$new();
		// 	compiled = $compile(html)
		// 	element = compiled(scope);
		// 	scope.$digest();
		// }));

	describe('myCalendar', function(){
		var scope,
		vm,
		element,
		compiled,
		html;

		beforeEach(inject(function($rootScope, $compile){
			html = "<my-calendar></my-calendar>";
			scope = $rootScope.$new();
			// vm = $controller('SelectController', {
			// 	$scope: scope
			// })
			compiled = $compile(html);
			element = compiled(scope);
			scope.$digest();
		}));

		it("should render the element correctly", function(){
			// vm = element.data('select');
			// vm.range = CalendarRange.getMonthlyRange();
			// vm.days = vm.range.days;
			var container = element.find("div[class='calendar-container']");
			expect(container.find("div[class='shaded']")).toBeTruthy();
			expect(element.find("p")).toBeTruthy();
			expect(element.find(".calendar-day")).toBeTruthy();
		});

	// 	it("should render the dates outside of the focus month as shaded")
	});

	describe('SelectController', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			vm = $controller('SelectController', {
				$scope: scope
			});
			vm.month = "January";
			vm.year = "2015";
		}));

		it('should construct a date object by appending data from the view together', function(){
				
				var date = vm.dateConstruct();

				expect(date.toString()).toBe("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
		});

		it('should set our range variable properly', function(){
				vm.submit();

				expect(vm.range.days.length).toBe(35);
		})

		it('should check to see what items need to be styled', function(){
				vm.submit();
				expect(vm.needStyling(vm.range.first)).toBeTruthy();

		})

	})
})

