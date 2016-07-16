radio button, dropdown
http://jsfiddle.net/hgxjv/615/
http://www.tutorialspoint.com/angular_material/angular_material_radiobuttons.htm

<!doctype html>
<!-- radio button, dropdown
http://jsfiddle.net/hgxjv/615/
http://www.tutorialspoint.com/angular_material/angular_material_radiobuttons.htm
-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-static-select-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script src="app.js">
    
    (function(angular) {
  'use strict';
angular.module('staticSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {
     singleSelect: null,
     multipleSelect: [],
     option1: 'option-1',
    };

    $scope.forceUnknownOption = function() {
      $scope.data.singleSelect = 'nonsense';
    };
 }]);
})(window.angular);

  </script>
  

  
</head>
<body ng-app="staticSelect">
  <div ng-controller="ExampleController">
  <form name="myForm">
    <label for="singleSelect"> Single select: </label><br>
    <select name="singleSelect" ng-model="data.singleSelect">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
    </select><br>

    <label for="singleSelect"> Single select with "not selected" option and dynamic option values: </label><br>
    <select name="singleSelect" id="singleSelect" ng-model="data.singleSelect">
      <option value="">---Please select---</option> <!-- not selected / blank option -->
      <option value="{{data.option1}}">Option 1</option> <!-- interpolation -->
      <option value="option-2">Option 2</option>
    </select><br>
    <button ng-click="forceUnknownOption()">Force unknown option</button><br>
    <tt>singleSelect = {{data.singleSelect}}</tt>

    <hr>
    <label for="multipleSelect"> Multiple select: </label><br>
    <select name="multipleSelect" id="multipleSelect" ng-model="data.multipleSelect" multiple>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </select><br>
    <tt>multipleSelect = {{data.multipleSelect}}</tt><br/>
  </form>
</div>
</body>
</html>
