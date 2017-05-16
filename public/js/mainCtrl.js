angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    $scope.getSalesInfo = () => {
        mainSrv.getSalesInfo().then((res) => {
            // console.log(res[0])
            $scope.sales = res
        })
    }
    $scope.getSalesInfo()


    // *******************************************
    // *            Website Visitors             *
    // *******************************************


    let getVisitors = () => {
        mainSrv.getVisitors().then((res) => {
             let visitors = res.data
             console.log(visitors)
            let monthVisitors = []
            visitors.map((e) => {

                let visitorDate = e.day.split('-')
                if(visitorDate[1] === '05'){
                  monthVisitors.push(e)
                }
        })
                  return monthVisitors
            // console.log(visitors)
            // $scope.visitors = res.data
            // console.log($scope.visitors)
        })
    }
    getVisitors()





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


    // *******************************************
    // *           Payments Received             *
    // *******************************************

    let getPaymentInfo = () => {
        mainSrv.getPaymentInfo().then((res) => {
            // console.log(res)
            $scope.payments = res.data
        })
    }
    getPaymentInfo()


})