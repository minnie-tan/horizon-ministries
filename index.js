(function(angular) {
  'use strict';

  angular.module('ngvalueSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {
     model: null,
     singleSelect: null,
     multipleSelect: [],
     members: [{id: '1', name:'Mildred'},{id: '2', name:'Jerlyn'},{id: '3', name:'Hannah Joy'}],
     invites: [{id: '11', name:'Juan'},{id: '12', name:'Jose'}],
     inviteSelect: {id: '11', name:'Juan'},
     availableOptions: [
       {id: '1', name: 'Option A'},
       {id: '2', name: 'Option B'},
       {id: '3', name: 'Option C'}
     ],
     selectedOption: {id: '3', name: 'Option C'}, //This sets the default value of the select in the ui
     /*
     availableOptions: [
          {value: 'myString', name: 'string'},
          {value: 1, name: 'integer'},
          {value: true, name: 'boolean'},
          {value: null, name: 'null'},
          {value: {prop: 'value'}, name: 'object'},
          {value: ['a'], name: 'array'}
     ]*/
    };
    $scope.submit = function() {
      $scope.s = 'submitted form';
    };
 }]);

})();  