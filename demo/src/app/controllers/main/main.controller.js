class MainCtrl {
  constructor ($scope, BookService) {

	$scope.books = [];

    BookService.all().then((resp) => {
        if (resp.data !== undefined && resp.data !== null){
            $scope.books = resp.data;
        }
    });

    $scope.delete = (book) => {
        BookService.delete(book).then(() => {
            for (let i = 0; i < $scope.books.length; i++) {
                let b = $scope.books[i];
                if (b.id === book.id){
                    $scope.books.splice(i, 1);
                }
            }
        }, (err) => {
            console.log(err);
        });
    };
  }
}

MainCtrl.$inject = ['$scope', 'BookService'];

export default MainCtrl;
