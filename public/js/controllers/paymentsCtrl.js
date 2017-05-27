angular.module('app').controller('paymentsCtrl', function ($scope, paymentsSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************


    paymentsSrv.getPaymentInfo().then((res) => {
         $scope.graphPaymentsData = paymentsSrv.allPaymentInfo(res, '05')

        $scope.payments = paymentsSrv.paymentInfo(res, '05')
 
    })

})