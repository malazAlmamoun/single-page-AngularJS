
(function(){
  'use strict';
  angular.module('calulater-app',[])
  .controller('calulaterController',function($scope){
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumber= function()
    {
      var totalNumericValue=calculateNumericFromStringValue($scope.name);
      $scope.totalValue=totalNumericValue;
    };

    // to calcuate the value
    function calculateNumericFromStringValue (string)
    {
      var totalStringValue=0;
      for(var i=0;i<string.length;i++)
      {
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }

  });
})();
