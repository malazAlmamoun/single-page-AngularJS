


(function (){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buy=this;
    buy.items=ShoppingListCheckOffService.getToBuyItems();
    buy.removeItemAndPush=function(itemIndex){
      ShoppingListCheckOffService.removeItemAndPush(itemIndex);
    };
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought=this;
    bought.boughtItems=ShoppingListCheckOffService.getBoughtItems();
  }





  function ShoppingListCheckOffService(){
    var service=this;
    var items=[
      { name: "cookies", quantity: 10 },
      { name: "milk", quantity: 5 },
      { name: "floor", quantity: 2}
    ];
    var boughtItems=[];
    service.getToBuyItems = function () {
      return items;
    };
    service.getBoughtItems=function(){
      return boughtItems;
    };
    service.removeItemAndPush=function(itemIndex){
      boughtItems.push(items[itemIndex]);
      items.splice(itemIndex,1);
    };
  } // end service function

})();
