angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.searchLink = '';

  $scope.getLinks = function(){
    Links.getLinks().then(function(result){
      result.sort(function(a,b){
        return b.visits - a.visits;
      });
      $scope.data.links = result;
    });
  };
  $scope.getLinks();
});
