(function() {
  'use strict';

  app.controller('project', ['$scope', '$http', function($scope, $http) {
    $http.get('data/project.json').success(function(ret) {
      $scope.project = ret.project;
      $scope.projects = ret.projects;
    });
  }]);
})();
