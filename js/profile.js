(function() {
  app.controller('profile', ['$scope', '$http', function($scope, $http) {
    $http.get('data/profile.json').success(function(ret) {
      $scope.name = ret.name;
      $scope.gender = ret.gender;
      $scope.birth = ret.birth;
      $scope.highSchool = ret.high_school;
      $scope.grade = ret.grade;
      $scope.college = ret.college;
      $scope.majar = ret.majar;
      $scope.phone = ret.phone;
      $scope.email = ret.email;
      $scope.gravatar = ret.gravatar;

      $scope.sns = ret.sns;
    });
  }]);
})();
