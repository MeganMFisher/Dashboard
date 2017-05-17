angular.module('app').service('salesSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

  this.getSalesInfo = () => {
    return $http.get(devUrl + '/sales').then((res) => {
      return res.data
    })
  }

   this.salesInfo = (res, month) => {
        let salesNums = res
            let salesMonth = []
            salesNums.map((e) => {
                if( e.month === month) {
                    salesMonth.push(e)
                }
            })
            return salesMonth[0]
    }


})