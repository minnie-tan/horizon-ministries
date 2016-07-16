var app = angular.module('mainApp', []);
app.controller('personCtrl', function($scope) {
    $scope.genders = ["Male", "Female"];
    
    $scope.genderValue = function(gender) {
      return gender.charAt(0).toLowerCase();
    }
});
