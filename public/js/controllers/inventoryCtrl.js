angular.module('app').controller('inventoryCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Product Inventory             *
    // *******************************************

    let getInventoryInfo = (monthWordSelected) => {
        mainSrv.getInventoryInfo().then((res) => {
            
            let inventoryNums = res
            let inventoryMonth = []
            inventoryNums.map((e) => {
                if( e.month === monthWordSelected) {
                    inventoryMonth.push(e)
                }
            })
            $scope.inventory = inventoryMonth[0]
        })
    }
    getInventoryInfo('may')


})
