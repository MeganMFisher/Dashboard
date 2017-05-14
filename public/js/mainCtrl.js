angular.module('app').controller('mainCtrl', function($scope, mainSrv){


  // *******************************************
  // *            Website Visitors             *
  // *******************************************

    $scope.getVisitors = () => {
        mainSrv.getVisitors().then((res) => {
            console.log(res)
            $scope.visitors = res.data
        })
    }
    $scope.getVisitors()


  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

    $scope.getSalesInfo = () => {
        mainSrv.getSalesInfo().then((res) => {
            console.log(res)
            $scope.sales = res.data
        })
    }
    $scope.getSalesInfo()

  // *******************************************
  // *           Product Type Sold             *
  // *******************************************

    $scope.getProductInfo = () => {
        mainSrv.getProductInfo().then((res) => {
            console.log(res)
            $scope.products = res.data
        })
    }
    $scope.getProductInfo()

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

    $scope.getInventoryInfo = () => {
        mainSrv.getProductInfo().then((res) => {
            console.log(res)
            $scope.inventory = res.data
        })
    }
    $scope.getInventoryInfo()

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

    $scope.getPaymentInfo = () => {
        mainSrv.getPaymentInfo().then((res) => {
            console.log(res)
            $scope.payments = res.data
        })
    }
    $scope.getPaymentInfo()

    
})