(function() {
  app.controller('profile', ['$scope', '$http', function($scope, $http) {
    $http.get('data/profile.json').success(function(ret) {
      $scope.live = ret.live;
      $scope.name = ret.name;
      $scope.gender = ret.gender;
      $scope.birth = ret.birth;
      $scope.university = ret.university;
      $scope.grade = ret.grade;
      $scope.college = ret.college;
      $scope.major = ret.major;
      $scope.phone = ret.phone;
      $scope.email = ret.email;
      $scope.gravatar = ret.gravatar;

      $scope.sns = ret.sns;
    });
  }]);

})();
