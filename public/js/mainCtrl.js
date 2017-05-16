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
            let visitorsTotal = 0
            monthVisitors.map((e) =>{
                visitorsTotal += e.visitors
            })
            $scope.visitors = visitorsTotal
            console.log($scope.visitors)

            let pageVisits = 0
            monthVisitors.map((e) =>{
                pageVisits += e.pagevisits
            })
            $scope.pageVisit = pageVisits
            console.log($scope.pageVisit)

            let knownContacts = 0
            monthVisitors.map((e) =>{
                knownContacts += e.knowncontacts
            })
            $scope.contacts = knownContacts
            console.log($scope.contacts)
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