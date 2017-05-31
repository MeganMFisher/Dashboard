angular.module('app').service('salesSrv', function ($http) {

  let heroku = 'http://localhost:3500'

//   let heroku = 'https://ecommercedashboard.herokuapp.com'

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

  this.getSalesInfo = () => {
    return $http.get(heroku + '/sales').then((res) => {
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