(function() {
  'use strict';

  app.controller('description', ['$scope', '$http', function($scope, $http) {
    $http.get('data/description.json').success(function(ret) {
      $scope.description = ret.description;
    });
  }]);
})();
