(function () {

'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
                 LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {

// I'm having trouble figuring out how to make this function with the split() javascript function.

        $scope.tooMuch = function(){

                var str = $scope.lunchItem;
                if(str == null){
                  $scope.message = "Please enter a lunch item.";
                }else {
                      var splits = str.split(',');
                                console.log(splits.length);
                      if(splits.length < 4){
                        $scope.message = "Enjoy";
                      }else {
                        $scope.message = "Too Much";
                      }
                }
        }
    }


})();
