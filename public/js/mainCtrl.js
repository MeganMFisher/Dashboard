angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    $scope.getSalesInfo = () => {
        mainSrv.getSalesInfo().then((res) => {
            console.log(res[0])
            $scope.sales = res
        })
    }
    $scope.getSalesInfo()


    // *******************************************
    // *            Website Visitors             *
    // *******************************************

    $scope.getVisitors = () => {
        mainSrv.getVisitors().then((res) => {
            // console.log(res)
            $scope.visitors = res.data
        })
    }
    $scope.getVisitors()


    // *******************************************
    // *           Product Inventory             *
    // *******************************************

    $scope.getInventoryInfo = () => {
        mainSrv.getProductInfo().then((res) => {
            // console.log(res)
            $scope.inventory = res.data
        })
    }
    $scope.getInventoryInfo()


    // *******************************************
    // *           Product Type Sold             *
    // *******************************************

    $scope.getProductInfo = () => {
        mainSrv.getProductInfo().then((res) => {
            // console.log(res)
            $scope.products = res.data
        })
    }
    $scope.getProductInfo()


    // *******************************************
    // *           Payments Received             *
    // *******************************************

    $scope.getPaymentInfo = () => {
        mainSrv.getPaymentInfo().then((res) => {
            // console.log(res)
            $scope.payments = res.data
        })
    }
    $scope.getPaymentInfo()


})