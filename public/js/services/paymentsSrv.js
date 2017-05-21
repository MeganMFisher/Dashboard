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

  this.allCCPaymentInfo = (res, month) => {
    let payments = res.data
            let monthlyPayments = []
            let monthlyCCPayments = []
            let monthlyCC = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === month) {
                    monthlyPayments.push(e)
                }
            })
           monthlyPayments.map((e) => {
              monthlyCCPayments.push(e.cctotal)
           })
          
          for (let i = 0; i < monthlyCCPayments.length; i++) {
            monthlyCC.push({
              'date': i + 1,
              'number': Number(monthlyCCPayments[i])
            })
          }
        //   console.log(monthlyCC)
           return monthlyCC
  }

    this.allPaypalPaymentInfo = (res, month) => {
    let payments = res.data
            let monthlyPayments = []
            let monthlyPaypalPayments = []
            let monthlyPaypal = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === month) {
                   monthlyPayments.push(e)
                }
            })
           monthlyPayments.map((e) => {
              monthlyPaypalPayments.push(e.paypaltotal)
           })
           for (let i = 0; i < monthlyPaypalPayments.length; i++) {
            monthlyPaypal.push({
              'date': i + 1,
              'number': Number(monthlyPaypalPayments[i])
            })
          }
          console.log(monthlyPaypal)
           return monthlyPaypal
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

            return paymentNums
    }


})