



(function (){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController ($scope)
  {
    $scope.show=function(){
      if($scope.name)
      {
        $scope.color="green";
        const re = /\s*(?:,|$)\s*/;
        $scope.newText=$scope.name.split(re);
        $scope.newText=$scope.newText.filter(function(e){return e});
        if($scope.newText.length <= 3)
        {
          $scope.msg="Enjoy!";
        }
        else
        {
          $scope.msg="Too much!";
        }
      }
      else
      {
        $scope.color="red";
        $scope.msg="Please enter data first";
      }


    }
  }
})();
