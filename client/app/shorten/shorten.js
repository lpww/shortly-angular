angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
  };

  $scope.recent = [];

  $scope.addLink = function(){
    console.log(Links);
    Links.addLink($scope.link).then(function(res){
      $scope.recent.push(res);
    });
  };

});
