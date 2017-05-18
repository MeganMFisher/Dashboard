angular.module('app').controller('productCtrl', function ($scope, productSrv) {


    // *******************************************
    // *           Product Type Sold             *
    // *******************************************


    productSrv.getProductInfo().then((res) => {
        $scope.products = productSrv.productInfo(res, 'may')
        // console.log($scope.products)
    })

})

