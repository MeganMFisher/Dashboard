angular.module('app').controller('paymentsCtrl', function ($scope, paymentsSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************


    paymentsSrv.getPaymentInfo().then((res) => {
        $scope.graphPaypalData = paymentsSrv.allPaypalPaymentInfo(res, '05')
        // console.log($scope.graphPaypalData)

        $scope.graphCCData = paymentsSrv.allCCPaymentInfo(res, '05')
        // console.log($scope.graphCCData)

        $scope.payments = paymentsSrv.paymentInfo(res, '05')
        // console.log($scope.payments)
    })

})