angular.module('app').service('inventorySrv', function ($http) {

  let heroku = 'http://localhost:3500'

//   let heroku = 'https://ecommercedashboard.herokuapp.com'

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

    this.getInventoryInfo = () => {
        return $http.get(heroku + '/inventory').then((res) => {
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