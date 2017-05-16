angular.module('app').controller('salesCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    let getSalesInfo = (monthWordSelected) => {
        mainSrv.getSalesInfo().then((res) => {
            console.log(res[0])
            let salesNums = res
            let salesMonth = []
            salesNums.map((e) => {
                if( e.month === monthWordSelected) {
                    salesMonth.push(e)
                }
            })
            $scope.sales = salesMonth[0]
            console.log($scope.sales)
        })
    }
    getSalesInfo('may')

})
