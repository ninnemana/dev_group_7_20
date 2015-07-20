class GeographyService {
	constructor ($http, ApiConfig) {
		this.$http = $http;
		this.$api = new ApiConfig();
	}

	countryStates () {
		return this.$http({
			method: 'get',
			url: this.$api.domain + '/geography/countrystates'
		});
	}
}

GeographyService.$inject = ['$http', 'ApiConfig'];

export default GeographyService;
