class FooterCtrl {
  constructor ($scope, $rootScope) {
    $scope.date = new Date();

    $rootScope.$watch('guides', (n) => $scope.guides = n);
  }
}

FooterCtrl.$inject = ['$scope', '$rootScope'];

export default FooterCtrl;
