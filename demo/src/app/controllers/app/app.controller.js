class AppCtrl {
	constructor ($rootScope, $scope, $mdSidenav) {

		$scope.openMenu = () => {
			console.log('toggle');
			$mdSidenav('left').toggle();
		};
		$rootScope.date = new Date();

	}
}

AppCtrl.$inject = ['$rootScope', '$scope', '$mdSidenav'];

export default AppCtrl;
