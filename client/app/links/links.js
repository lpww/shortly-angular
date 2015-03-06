angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    $http.get(Links).
      success(function(data, status, headers, config){
        console.log('data', data);
      });
      error(function(data, status, headers, config){

      });
  };

});


