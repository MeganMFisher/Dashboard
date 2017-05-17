angular.module('app')
  .directive('productAveragePie', function () {
    return {
      restrict: 'AE',
      template: '<div id="productAveragePie"></div>',
      scope: {
        averageData: '='
      },
      controller: function($scope) {

        console.log($scope.averageData)

        let averageData = $scope.averageData
        console.log(averageData)
 
      }
    }
  })