(function() {
  'use strict';

  app.controller('skill', ['$scope', '$http', function($scope, $http) {
    $http.get('data/skill.json').success(function(ret) {
      $scope.skill = ret.skill;
    });
  }]);
})();
