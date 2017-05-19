angular.module('app')
  .directive('productPie', function () {
    return {
      restrict: 'AE',
      template: '<div id="productPie"></div>',
      // scope: {},
      controller: function ($scope, productSrv) {

        $scope.testing = productSrv.testing()

        console.log($scope.testing)

        productSrv.getProductInfo().then((res) => {
          $scope.products = productSrv.productInfo(res, 'may')
          console.log($scope.products)
        })

      },

    }
  })