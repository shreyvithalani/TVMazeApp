angular.module('tvshow.controller',[])
	.controller('TvshowController',function ($scope, tvshow) {
		$scope.tvshow = tvshow;
	});