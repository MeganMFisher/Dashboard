angular.module('app').controller('salesCtrl', function ($scope, salesSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************
    

    salesSrv.getSalesInfo().then((res) => {
        $scope.sales = salesSrv.salesInfo(res, 'may')
    })

})
