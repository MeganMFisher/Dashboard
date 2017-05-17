angular.module('app').service('paymentsSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

    // *******************************************
    // *           Payments Received             *
    // *******************************************

  this.getPaymentInfo = () => {
    return $http.get(devUrl + '/payment').then((res) => {
      return res
    })
  }


   this.paymentInfo = (res, month) => {
    let payments = res.data
            let monthlyPayments = []
            let paymentNums = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === month) {
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
            paymentNums.push(Math.round(ccTotals / totalPayments * 100))
            paymentNums.push(Math.round(paypalTotals / totalPayments * 100))
            console.log(paymentNums)
            return paymentNums
    }


})