class Integer{
	constructor (){
		return {
			require: 'ngModel',
			link: (scope, element, attrs, ctrl) => {
				ctrl.$parsers.unshift((viewValue) => parseInt(viewValue, 0));
			}
		};
	}
}

export default Integer;
