/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__controllers_47_main_47_main_46_controller__,
	    $__controllers_47_app_47_app_46_controller__,
	    $__components_47_header_47_header_46_controller__,
	    $__components_47_navbar_47_navbar_46_controller__,
	    $__components_47_footer_47_footer_46_controller__,
	    $__controllers_47_book_47_book_46_controller__,
	    $__constants_47_api_46_constant__,
	    $__services_47_geography_46_service__,
	    $__services_47_utility_46_service__,
	    $__services_47_book_46_service__,
	    $__filters_47_startFrom__;
	var MainCtrl = ($__controllers_47_main_47_main_46_controller__ = __webpack_require__(1), $__controllers_47_main_47_main_46_controller__ && $__controllers_47_main_47_main_46_controller__.__esModule && $__controllers_47_main_47_main_46_controller__ || {default: $__controllers_47_main_47_main_46_controller__}).default;
	var AppCtrl = ($__controllers_47_app_47_app_46_controller__ = __webpack_require__(2), $__controllers_47_app_47_app_46_controller__ && $__controllers_47_app_47_app_46_controller__.__esModule && $__controllers_47_app_47_app_46_controller__ || {default: $__controllers_47_app_47_app_46_controller__}).default;
	var HeaderCtrl = ($__components_47_header_47_header_46_controller__ = __webpack_require__(3), $__components_47_header_47_header_46_controller__ && $__components_47_header_47_header_46_controller__.__esModule && $__components_47_header_47_header_46_controller__ || {default: $__components_47_header_47_header_46_controller__}).default;
	var NavbarCtrl = ($__components_47_navbar_47_navbar_46_controller__ = __webpack_require__(4), $__components_47_navbar_47_navbar_46_controller__ && $__components_47_navbar_47_navbar_46_controller__.__esModule && $__components_47_navbar_47_navbar_46_controller__ || {default: $__components_47_navbar_47_navbar_46_controller__}).default;
	var FooterCtrl = ($__components_47_footer_47_footer_46_controller__ = __webpack_require__(5), $__components_47_footer_47_footer_46_controller__ && $__components_47_footer_47_footer_46_controller__.__esModule && $__components_47_footer_47_footer_46_controller__ || {default: $__components_47_footer_47_footer_46_controller__}).default;
	var BookCtrl = ($__controllers_47_book_47_book_46_controller__ = __webpack_require__(6), $__controllers_47_book_47_book_46_controller__ && $__controllers_47_book_47_book_46_controller__.__esModule && $__controllers_47_book_47_book_46_controller__ || {default: $__controllers_47_book_47_book_46_controller__}).default;
	var ApiConfig = ($__constants_47_api_46_constant__ = __webpack_require__(7), $__constants_47_api_46_constant__ && $__constants_47_api_46_constant__.__esModule && $__constants_47_api_46_constant__ || {default: $__constants_47_api_46_constant__}).default;
	var GeographyService = ($__services_47_geography_46_service__ = __webpack_require__(8), $__services_47_geography_46_service__ && $__services_47_geography_46_service__.__esModule && $__services_47_geography_46_service__ || {default: $__services_47_geography_46_service__}).default;
	var UtilityService = ($__services_47_utility_46_service__ = __webpack_require__(9), $__services_47_utility_46_service__ && $__services_47_utility_46_service__.__esModule && $__services_47_utility_46_service__ || {default: $__services_47_utility_46_service__}).default;
	var BookService = ($__services_47_book_46_service__ = __webpack_require__(10), $__services_47_book_46_service__ && $__services_47_book_46_service__.__esModule && $__services_47_book_46_service__ || {default: $__services_47_book_46_service__}).default;
	var StartFrom = ($__filters_47_startFrom__ = __webpack_require__(11), $__filters_47_startFrom__ && $__filters_47_startFrom__.__esModule && $__filters_47_startFrom__ || {default: $__filters_47_startFrom__}).default;
	angular.module('trucksPlus', ['hc.marked', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngTouch', 'ngMaterial', 'ngResource', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'angular-uri']).controller('MainCtrl', MainCtrl).controller('AppCtrl', AppCtrl).controller('HeaderCtrl', HeaderCtrl).controller('NavbarCtrl', NavbarCtrl).controller('FooterCtrl', FooterCtrl).constant('ApiConfig', ApiConfig).service('GeographyService', GeographyService).service('UtilityService', UtilityService).service('BookService', BookService).filter('startFrom', StartFrom).config((function($stateProvider, $urlRouterProvider, $interpolateProvider, $locationProvider, localStorageServiceProvider) {
	  var headerState = {
	    templateUrl: 'app/components/header/header.html',
	    controller: HeaderCtrl
	  };
	  var footerState = {
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
	}));

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var MainCtrl = function MainCtrl($scope, BookService) {
	  $scope.books = [];
	  BookService.all().then((function(resp) {
	    if (resp.data !== undefined && resp.data !== null) {
	      $scope.books = resp.data;
	    }
	  }));
	  $scope.delete = (function(book) {
	    BookService.delete(book).then((function() {
	      for (var i = 0; i < $scope.books.length; i++) {
	        var b = $scope.books[i];
	        if (b.id === book.id) {
	          $scope.books.splice(i, 1);
	        }
	      }
	    }), (function(err) {
	      console.log(err);
	    }));
	  });
	};
	($traceurRuntime.createClass)(MainCtrl, {}, {});
	MainCtrl.$inject = ['$scope', 'BookService'];
	var $__default = MainCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var AppCtrl = function AppCtrl($rootScope, $scope, $mdSidenav) {
	  $scope.openMenu = (function() {
	    console.log('toggle');
	    $mdSidenav('left').toggle();
	  });
	  $rootScope.date = new Date();
	};
	($traceurRuntime.createClass)(AppCtrl, {}, {});
	AppCtrl.$inject = ['$rootScope', '$scope', '$mdSidenav'];
	var $__default = AppCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var HeaderCtrl = function HeaderCtrl() {};
	($traceurRuntime.createClass)(HeaderCtrl, {}, {});
	HeaderCtrl.$inject = [];
	var $__default = HeaderCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var NavbarCtrl = function NavbarCtrl() {};
	($traceurRuntime.createClass)(NavbarCtrl, {}, {});
	NavbarCtrl.$inject = [];
	var $__default = NavbarCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var FooterCtrl = function FooterCtrl($scope, $rootScope) {
	  $scope.date = new Date();
	  $rootScope.$watch('guides', (function(n) {
	    return $scope.guides = n;
	  }));
	};
	($traceurRuntime.createClass)(FooterCtrl, {}, {});
	FooterCtrl.$inject = ['$scope', '$rootScope'];
	var $__default = FooterCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var BookCtrl = function BookCtrl($scope, $stateParams, $location, $mdToast, BookService) {
	  $scope.book = {
	    id: parseInt($stateParams.id, 0) || 0,
	    title: '',
	    author: '',
	    date_added: new Date()
	  };
	  $scope.save = (function() {
	    if ($scope.book.title === '') {
	      $mdToast.show($mdToast.simple().content("Book must have a title!"));
	      return;
	    } else if ($scope.book.author === '') {
	      $mdToast.show($mdToast.simple().content("Book must have an author!"));
	      return;
	    }
	    BookService.save($scope.book).then((function() {
	      $location.path('/');
	    }), (function(err) {
	      $mdToast.show($mdToast.simple().content(("Failed to save book! " + err.data)));
	    }));
	  });
	  if ($scope.book.id > 0) {
	    BookService.get($scope.book.id).then((function(resp) {
	      if (resp.data !== undefined && resp.data !== null) {
	        $scope.book = resp.data;
	      }
	    }));
	  }
	};
	($traceurRuntime.createClass)(BookCtrl, {}, {});
	BookCtrl.$inject = ['$scope', '$stateParams', '$location', '$mdToast', 'BookService'];
	var $__default = BookCtrl;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ApiConfig = function ApiConfig() {
	  this.domain = 'http://localhost:8080';
	};
	($traceurRuntime.createClass)(ApiConfig, {}, {});
	var $__default = ApiConfig;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var GeographyService = function GeographyService($http, ApiConfig) {
	  this.$http = $http;
	  this.$api = new ApiConfig();
	};
	($traceurRuntime.createClass)(GeographyService, {countryStates: function() {
	    return this.$http({
	      method: 'get',
	      url: this.$api.domain + '/geography/countrystates'
	    });
	  }}, {});
	GeographyService.$inject = ['$http', 'ApiConfig'];
	var $__default = GeographyService;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var UtilityService = function UtilityService() {};
	($traceurRuntime.createClass)(UtilityService, {isUndefinedOrNull: function(val) {
	    if (val === undefined) {
	      return true;
	    } else if (val === null) {
	      return true;
	    }
	    return false;
	  }}, {});
	var $__default = UtilityService;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var BookService = function BookService($http, ApiConfig) {
	  this.$http = $http;
	  this.$api = new ApiConfig();
	};
	($traceurRuntime.createClass)(BookService, {
	  all: function() {
	    return this.$http({
	      method: 'get',
	      url: '/api/books'
	    });
	  },
	  get: function(id) {
	    return this.$http({
	      method: 'get',
	      url: '/api/books/' + id
	    });
	  },
	  save: function(book) {
	    if (book.id > 0) {
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
	  },
	  delete: function(book) {
	    return this.$http({
	      method: 'delete',
	      url: '/api/books/' + book.id
	    });
	  }
	}, {});
	BookService.$inject = ['$http', 'ApiConfig'];
	var $__default = BookService;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var StartFrom = function StartFrom() {
	  return (function(input, start) {
	    return input.slice(start + 1);
	  });
	};
	($traceurRuntime.createClass)(StartFrom, {}, {});
	var $__default = StartFrom;

	//# sourceMappingURL=<compileOutput>


/***/ }
/******/ ]);