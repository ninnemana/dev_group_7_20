class BookService {
	constructor ($http, ApiConfig) {
		this.$http = $http;
		this.$api = new ApiConfig();
	}

	all () {
		return this.$http({
			method: 'get',
			url: '/api/books'
		});
	}

	get (id) {
		return this.$http({
			method: 'get',
			url: '/api/books/' + id
		});
	}

	save (book) {
		if (book.id > 0){
			return this.$http({
				method: 'put',
				url: '/api/books/' + book.id,
				data: book
			});
		}
		return this.$http({
			method: 'post',
			url: '/api/books',
			data: book
		});
	}

	delete (book) {
		return this.$http({
			method: 'delete',
			url: '/api/books/' + book.id
		});
	}

}

BookService.$inject = ['$http', 'ApiConfig'];

export default BookService;
