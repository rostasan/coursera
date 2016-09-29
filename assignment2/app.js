(function(){
  'use strict';


angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListViewController', ShoppingListViewController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.quantity = "";
        itemAdder.status = "";

        itemAdder.addItem = function () {
          ShoppingListService.addItem(itemAdder.itemName, itemAdder.quantity, itemAdder.status);
        }
}

ShoppingListViewController.$inject = ['ShoppingListService'];
function ShoppingListViewController(ShoppingListService) {
      var showList = this;

      showList.items = ShoppingListService.getItems();

      showList.removeItem = function (itemIndex) {
          ShoppingListService.removeItem(ItemIndex);
      };
      showList.status = function (itemIndex) {
          ShoppingListService.status(itemIndex);
          ShoppingListService.show(item);
};
}


function ShoppingListService() {
      var service = this;

      var items = [
        {name: "cookies", quantity: 10, status: false },
        {name: "chips", quantity: 3, status: false },
        {name: "brownies", quantity: 6, status: false },
        {name: "eggs", quantity: 22, status: false },
        {name: "Veggies", quantity: 1, status: false }
      ];

      service.status = function (status){
        var item = {
          status: status
        };
        items.push(item);

    };
      service.show = function (status){

          if(items.status == true){
            return true;
          }else{
            return false;
          }
      };
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };


      service.getItems = function () {
        return items;
      };

}

})();
