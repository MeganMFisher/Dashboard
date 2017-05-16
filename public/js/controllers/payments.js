angular.module('app').controller('paymentsCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************

    let getPaymentInfo = () => {
        mainSrv.getPaymentInfo().then((res) => {
            console.log(res.data)
            $scope.payments = res.data
        })
    }
    getPaymentInfo()


})