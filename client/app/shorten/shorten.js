angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};

  $scope.addLink = function(){
    console.log('link', $scope.link);
    $http({
      url: '/api/links',
      method: 'POST',
      data: {url: $scope.link}
    })
      .success(function(data, status, headers, config){
      })
      .error(function(data, status, headers, config){
      });

  };

});
