angular.module('app').controller('salesCtrl', function ($scope, salesSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

//     let getSalesInfo = (monthWordSelected) => {
//         mainSrv.getSalesInfo().then((res) => {
//             let salesNums = res
//             let salesMonth = []
//             salesNums.map((e) => {
//                 if( e.month === monthWordSelected) {
//                     salesMonth.push(e)
//                 }
//             })
//             $scope.sales = salesMonth[0]
//         })
//     }
//     getSalesInfo('may')


    salesSrv.getSalesInfo().then((res) => {
        $scope.sales = salesSrv.salesInfo(res, 'may')
    })

})
