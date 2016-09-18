(function () {

'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
                 LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {


  console.log("Hello");
        $scope.tooMuch = function(str){
          $scope.lunchItem = str.split(",");
          if($scope.lunchItem  > 4){
            $scope.message = "Enjoy";
          }else {
            $scope.message = "Too Much"

          };



        }

    }



})();
