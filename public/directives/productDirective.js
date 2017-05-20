angular.module('app')
  .directive('productPie', function () {
    return {
      restrict: 'AE',
      template: '<div id="productPie"></div>',
      scope: {
        productData: '='
      },
      controller: function ($scope) {

       $scope.$watch('productData', function(newVal, oldVal){
         console.log($scope.productData)
       })

      },

    }
  })