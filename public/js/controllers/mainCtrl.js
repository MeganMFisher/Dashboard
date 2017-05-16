angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    // $scope.getSalesInfo = () => {
    //     mainSrv.getSalesInfo().then((res) => {
    //         // console.log(res[0])
    //         $scope.sales = res
    //     })
    // }
    // $scope.getSalesInfo()




    // *******************************************
    // *           Product Inventory             *
    // *******************************************

    let getInventoryInfo = () => {
        mainSrv.getInventoryInfo().then((res) => {
            // console.log(res)
            $scope.inventory = res
        })
    }
    getInventoryInfo()


    // *******************************************
    // *           Product Type Sold             *
    // *******************************************

    let getProductInfo = () => {
        mainSrv.getProductInfo().then((res) => {
            // console.log(res)
            $scope.products = res.data
        })
    }
    getProductInfo()


})