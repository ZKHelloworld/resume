(function() {
  'use strict';

  app.controller('experience', ['$scope', '$http', function($scope, $http) {
    $http.get('data/experience.json').success(function(ret) {
      $scope.experience = ret.experience;
      $scope.experiences = ret.experiences;
    });
  }]);
})();
