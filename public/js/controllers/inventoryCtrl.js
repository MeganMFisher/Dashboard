angular.module('app').controller('inventoryCtrl', function ($scope, inventorySrv) {

    // *******************************************
    // *           Product Inventory             *
    // *******************************************
    

    inventorySrv.getInventoryInfo().then((res) => {
        $scope.inventory = inventorySrv.inventoryInfo(res, 'may')
    })


})
