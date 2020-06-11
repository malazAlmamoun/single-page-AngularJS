
(function (){
  'use strict';
  // x="me";
  angular.module('myFirstApp', [])
  .controller('myFirstController',function($scope){
    $scope.myName="Malaz Almamoun";
    $scope.sayHello=function()
    {
      return "hello world";
    };
  });
})();
