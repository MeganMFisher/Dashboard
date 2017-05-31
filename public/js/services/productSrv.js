angular.module('app').service('productSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  let heroku = 'https://ecommercedashboard.herokuapp.com/'

    // *******************************************
    // *           Product Type Sold             *
    // *******************************************

    this.getProductInfo = () => {
        return $http.get(heroku + '/product').then((res) => {
             return res.data
        })
    }

    this.testing = 'hello'

    this.productInfo = (res, month) => {
        let productInfo = res
            let monthlyProductInfo = []
            productInfo.map((e) => {
               if(e.month === month) {
                   monthlyProductInfo.push(e)
               } 
            })
            let totalProductsSold = 0
            monthlyProductInfo.map((e) => {
                totalProductsSold += e.numberproducttypesold
            })
            monthlyProductInfo.map((e) => {
                if(e.producttype === 'clothing') {
                    let percent = Math.round(e.numberproducttypesold / totalProductsSold * 100)
                    e["percent"] = percent
                } else if(e.producttype === 'shoes') {
                    let percent = Math.round(e.numberproducttypesold / totalProductsSold * 100)
                    e["percent"] = percent
                } else if(e.producttype === 'accessories') {
                    let percent = Math.round(e.numberproducttypesold / totalProductsSold * 100)
                    e["percent"] = percent
                } else if(e.producttype === 'makeup') {
                    let percent = Math.round(e.numberproducttypesold / totalProductsSold * 100)
                    e["percent"] = percent
                }
            })
            monthlyProductInfo.sort((a, b) => {
                return b.percent - a.percent;
            })

            let products = monthlyProductInfo
            return products
    }



})