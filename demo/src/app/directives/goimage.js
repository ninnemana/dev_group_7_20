
// goimage directive
//
// This directive will take golang's url.URL struct
// that is assigned to ng-model on the go-image element
// and set the src attribute of the element
// to the encoded url.URL struct.

class GoImage {
	constructor () {
		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=goImage'
			},
			link: (scope, el, attrs, ngModel) => {
				scope.$watch(ngModel.$viewValue, () => {
					let val = ngModel.$viewValue;
					if (val === undefined || val === null) {
						return;
					}

					let path = '';
					if (val.Host !== '') {
						path = val.Scheme + '://' + val.Host;
					}
					path += val.Path;
					attrs.$set('src', path);
				});
			}
		};
	}
}
export default GoImage;
