angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = '';
  $scope.recent = [];
  $scope.regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  $scope.errorMessage = 'Please enter a valid link';

  $scope.addLink = function(isValid){
    if(isValid){
      Links.addLink($scope.link).then(function(res){
        $scope.recent.push(res);
      });
      this.link = '';
    } else {
      $scope.errorMessage = 'you  are abadd';
    }
  };
});
