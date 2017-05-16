angular.module('app').controller('paymentsCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Payments Received             *
    // *******************************************

    let getPaymentInfo = () => {
        mainSrv.getPaymentInfo().then((res) => {
            let payments = res.data
            let monthlyPayments = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === '05') {
                    monthlyPayments.push(e)
                }
            })
            console.log(monthlyPayments)
            let paypalTotals = 0
            monthlyPayments.map((e) => {
                paypalTotals += e.paypaltotal

            })
            console.log(paypalTotals)

        })
    }
    getPaymentInfo()


})