angular.module('app').controller('productCtrl', function ($scope, mainSrv) {


    // *******************************************
    // *           Product Type Sold             *
    // *******************************************

    let getProductInfo = (monthWordSelected) => {
        mainSrv.getProductInfo().then((res) => {
            let productInfo = res.data
            let monthlyProductInfo = []
            productInfo.map((e) => {
               if(e.month === monthWordSelected) {
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

            $scope.products = monthlyProductInfo
            // console.log($scope.products)
    // $scope.products;
    console.log($scope.products)
        })
    }
    getProductInfo('may')


})

