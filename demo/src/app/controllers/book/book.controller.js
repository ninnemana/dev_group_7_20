class BookCtrl {
  constructor ($scope, $stateParams, $location, $mdToast, BookService) {
	$scope.book = {
        id: parseInt($stateParams.id, 0) || 0,
        title: '',
        author: '',
        date_added: new Date()
    };

    $scope.save = () => {
        if ($scope.book.title === '') {
            $mdToast.show($mdToast.simple().content(`Book must have a title!`));
            return;
        } else if ($scope.book.author === '') {
            $mdToast.show($mdToast.simple().content(`Book must have an author!`));
            return;
        }

        BookService.save($scope.book).then(() => {
            $location.path('/');
        }, (err) => {
            $mdToast.show($mdToast.simple().content(`Failed to save book! ${err.data}`));
        });
    };

    if ($scope.book.id > 0) {
        BookService.get($scope.book.id).then((resp) => {
            if (resp.data !== undefined && resp.data !== null){
                $scope.book = resp.data;
            }
        });
    }
  }
}

BookCtrl.$inject = ['$scope', '$stateParams', '$location', '$mdToast', 'BookService'];

export default BookCtrl;
