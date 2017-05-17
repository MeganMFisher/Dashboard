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
            console.log(totalProductsSold)

            monthlyProductInfo.map((e) => {
                if(e.producttype === 'clothing') {
                    let clothingPercent = e.numberproducttypesold / totalProductsSold * 100
                    e["clothingPercent"] = clothingPercent
                } else if(e.producttype === 'shoes') {
                    let shoePercent = e.numberproducttypesold / totalProductsSold * 100
                    e["shoePercent"] = shoePercent
                } else if(e.producttype === 'accessories') {
                    let assessoriesPercent = e.numberproducttypesold / totalProductsSold * 100
                    e["assessoriesPercent"] = assessoriesPercent
                } else if(e.producttype === 'makeup') {
                    let makeupPercent = e.numberproducttypesold / totalProductsSold * 100
                    e["makeupPercent"] = makeupPercent
                }
            })
            

      


            // console.log(res.data)
            $scope.products = monthlyProductInfo
            console.log($scope.products)
        })
    }
    getProductInfo('may')


})

