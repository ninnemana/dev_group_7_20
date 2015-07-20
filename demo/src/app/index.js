import MainCtrl from './controllers/main/main.controller';

import AppCtrl from './controllers/app/app.controller';
import HeaderCtrl from './components/header/header.controller';
import NavbarCtrl from './components/navbar/navbar.controller';
import FooterCtrl from './components/footer/footer.controller';
import BookCtrl from './controllers/book/book.controller';

import ApiConfig from './constants/api.constant';

import GeographyService from './services/geography.service';
import UtilityService from './services/utility.service';
import BookService from './services/book.service';


import StartFrom from './filters/startFrom';

angular.module('trucksPlus', ['hc.marked', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngTouch', 'ngMaterial', 'ngResource', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'angular-uri'])
	.controller('MainCtrl', MainCtrl)
	.controller('AppCtrl', AppCtrl)
	.controller('HeaderCtrl', HeaderCtrl)
	.controller('NavbarCtrl', NavbarCtrl)
	.controller('FooterCtrl', FooterCtrl)

	.constant('ApiConfig', ApiConfig)
	.service('GeographyService', GeographyService)
	.service('UtilityService', UtilityService)
	.service('BookService', BookService)


	.filter('startFrom', StartFrom)

.config(($stateProvider, $urlRouterProvider, $interpolateProvider, $locationProvider, localStorageServiceProvider) => {

	let headerState = {
		templateUrl: 'app/components/header/header.html',
		controller: HeaderCtrl
	};
	let footerState = {
		templateUrl: 'app/components/footer/footer.html',
		controller: FooterCtrl
	};
	$stateProvider.state({
		name: 'home',
		url: '/',
		views: {
			'body': {
				templateUrl: 'app/controllers/main/main.html',
				controller: MainCtrl
			},
			'header': headerState,
			'footer': footerState
		}
	}).state({
		name: 'book',
		url: '/book/:id',
		views: {
			'body': {
				templateUrl: 'app/controllers/book/book.html',
				controller: BookCtrl
			},
			'header': headerState,
			'footer': footerState
		}
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
	localStorageServiceProvider.setPrefix('localStorage').setPrefix('bookie');
});
