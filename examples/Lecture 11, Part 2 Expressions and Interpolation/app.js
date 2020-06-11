//
//
//
// (function(){
//   'use strict';
// angular.module('MsgApp',[])
// .controller('MsgController',MsgController);
// MsgController.$inject=['$scope'];
// function MsgController($scope)
// {
//   $scope.name="Malaz Almamoun";
//   $scope.state_of_person='hungry';
//   $scope.changeImage=function(){
//   $scope.state_of_person='unhungry';
//   };
//   $scope.sayMessage=function(){
//     return 'Hi, I will have a lot of money and do not need anything from other people';
//   };
// }
// })();


// change in the code by me only



(function(){
  'use strict';
angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject=['$scope'];
function MsgController($scope)
{
  $scope.name="Malaz Almamoun";
  $scope.state_of_person='hungry';
  $scope.changeImage=function(){
  if($scope.state_of_person == 'hungry')
  {
      $scope.state_of_person='unhungry';
  }
  else {
      $scope.state_of_person='hungry';
  }

  };
  $scope.sayMessage=function(){
    return 'Hi, I will have a lot of money and do not need anything from other people';
  };
}
})();
