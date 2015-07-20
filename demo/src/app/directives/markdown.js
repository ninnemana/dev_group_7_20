class Markdown {
	constructor (marked) {
		return {
			require: 'ngModel',
			link: (scope, el, attrs, ngModel) => {
				scope.$watch(ngModel.$viewValue, () => {
					var val = ngModel.$viewValue;
					if (val === undefined || val === null) {
						return;
					}
					let txt = marked(ngModel.$viewValue);
					el.html(txt);
				});
			}
		};
	}
}

Markdown.$inject = ['marked'];

export default Markdown;
