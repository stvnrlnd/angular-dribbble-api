(function(){
  'use strict';

  // TODO: Implement this better, preferably in a way that allows git to ignore it.
  var accessToken = '';

  angular.module('core', [])
    .controller('shotsListController', function($scope, $http) {
      $scope.list;
      $http.jsonp('https://api.dribbble.com/v1/shots?callback=JSON_CALLBACK&access_token=' + accessToken)
        .then(function(data) {
          $scope.list = data.data;
          console.log(data);
        });
    });
})();
