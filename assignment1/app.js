(function () {

'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
                 LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {

// I'm having trouble figuring out how to make this function with the split() javascript function.

        $scope.tooMuch = function(){

          var str = $scope.lunchItem;
          var split = str.split (',', 10);
                    console.log(str.length);
          if(str.length > 4){
            $scope.message = "Enjoy";
          }else {
            $scope.message = "Too Much"

          };



        }
        var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);
console.log(splits);
console.log(splits.length);


    }



})();
