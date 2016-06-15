angular.module('show.controller', [])
	.directive('showPreview', function () {
		return {
			restrict: 'EA',
			scope: {
				shows: '='
			},
			templateUrl: '../views/preview.html'
		}
	})
	.controller('ShowController', function ($scope, showResource) {

		$scope.getShows = function () {
			showResource.query({
				name: $scope.showname
			}, function (response) {
				$scope.details = response;
			});	
		};
});
