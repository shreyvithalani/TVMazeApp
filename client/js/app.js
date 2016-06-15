angular.module('app', 
	['ngRoute', 'ngResource', 'show.controller', 'show.service','tvshow.service','tvshow.controller'])
	.filter('trustHTML', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  })
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/shows.html',
					controller: 'ShowController'
				})
				 .when('/shows/:id', {
          			templateUrl: 'views/tvshow.html',
          			controller: 'TvshowController',
         			resolve: {
           				 tvshow: function ($route, TvshowService) {
              				return TvshowService.get({id: $route.current.params.id});
            				}
          				}
       			})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);
