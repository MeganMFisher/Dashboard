angular.module('app').controller('salesCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    let getSalesInfo = (monthWordSelected) => {
        mainSrv.getSalesInfo().then((res) => {
            let salesNums = res
            let salesMonth = []
            salesNums.map((e) => {
                if( e.month === monthWordSelected) {
                    salesMonth.push(e)
                }
            })
            $scope.sales = salesMonth
            console.log($scope.sales)
        })
    }
    getSalesInfo('may')


})