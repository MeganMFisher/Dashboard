angular.module('app').controller('paymentsCtrl', function ($scope, paymentsSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************


    paymentsSrv.getPaymentInfo().then((res) => {
        $scope.payments = paymentsSrv.paymentInfo(res, '05')
    })

})