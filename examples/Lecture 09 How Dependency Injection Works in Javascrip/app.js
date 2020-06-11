//  do not create functio with name for controller
// (function(){
//   'use strict';
//   angular.module('DIApp',[])
//   .controller('DIController',function($scope,$filter){
//     $scope.name="Malaz ALmamoun";
//     $scope.upper= function(){
//       var upCase=$filter('uppercase')
//       $scope.name=upCase($scope.name);
//     };
//   });
// })();



(function(){
  'use strict';
  angular.module('DIApp',[])
  .controller('DIController',DIController);
  function DIController($scope,$filter)
  {
      $scope.name="Malaz ALmamoun";
      $scope.upper= function(){
      var upCase=$filter('uppercase')
      $scope.name=upCase($scope.name);
    };
  }
})();
