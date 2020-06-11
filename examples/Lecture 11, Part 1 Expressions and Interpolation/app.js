


(function(){
  'use strict';
angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject=['$scope'];
function MsgController($scope)
{
  $scope.name="Malaz Almamoun";
  $scope.sayMessage=function(){
    return 'Hi, I will have a lot of money and do not need anything from other people';
  };
}
})();
