angular.module('app').service('paymentsSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  let heroku = 'https://ecommercedashboard.herokuapp.com'

    // *******************************************
    // *           Payments Received             *
    // *******************************************

  this.getPaymentInfo = () => {
    return $http.get(heroku + '/payment').then((res) => {
      return res
    })
  }

  this.allPaymentInfo = (res, month) => {
    let payments = res.data
            let monthlyPayments = []
            let monthlyAllPayments = []
            payments.map((e) => {
                let paymentDate = e.day.split('-')
                if(paymentDate[1] === month) {
                    monthlyPayments.push(e)
                }
            })

          for (let i = 0; i < monthlyPayments.length; i++) {
            monthlyAllPayments.push({
              'date': i + 1,
              'number': Number(monthlyPayments[i].cctotal), 
              'number2': Number(monthlyPayments[i].paypaltotal)
            })
          }
           return monthlyAllPayments
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