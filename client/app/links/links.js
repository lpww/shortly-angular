angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(result){
      $scope.data.links = result;
    });
  };
  $scope.getLinks();
});
