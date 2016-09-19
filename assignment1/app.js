(function () {

'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
                 LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {

// I'm having trouble figuring out how to make this function with the split() javascript function.

        $scope.tooMuch = function(lunchItem){
          var str = lunchItem.split(",", 10);
          if($scope.lunchItem  > 4){
            $scope.message = "Enjoy";
          }else {
            $scope.message = "Too Much"

          };



        }

    }



})();
