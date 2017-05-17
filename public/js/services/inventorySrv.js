angular.module('app').service('inventorySrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

    this.getInventoryInfo = () => {
        return $http.get(devUrl + '/inventory').then((res) => {
            return res.data
        })
  }

   this.inventoryInfo = (res, month) => {
        let inventoryNums = res
            let inventoryMonth = []
            inventoryNums.map((e) => {
                if( e.month === month) {
                    inventoryMonth.push(e)
                }
            })
            return inventoryMonth[0]
    }


})