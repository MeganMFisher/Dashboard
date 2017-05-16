angular.module('app').controller('paymentsCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************

    let getPaymentInfo = (monthSelected) => {
        mainSrv.getPaymentInfo().then((res) => {
            let payments = res.data
            let monthlyPayments = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === monthSelected) {
                    monthlyPayments.push(e)
                }
            })

            let paypalTotals = 0
            let ccTotals = 0
            monthlyPayments.map((e) => {
                paypalTotals += e.paypaltotal
                ccTotals += e.cctotal

            })

            let totalPayments = paypalTotals  + ccTotals
            $scope.percentPaypal = paypalTotals / totalPayments * 100
            $scope.percentCC = ccTotals / totalPayments * 100
        })
    }
    getPaymentInfo('05')


})