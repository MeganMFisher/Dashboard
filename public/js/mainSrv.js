angular.module('app').service('mainSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  // // *******************************************
  // // *           Sales and Returns             *
  // // *******************************************

  // this.getSalesInfo = () => {
  //   return $http.get(devUrl + '/sales').then((res) => {
  //     return res.data
  //   })
  // }

  //  this.salesInfo = (res, month) => {
  //       let salesNums = res
  //           let salesMonth = []
  //           salesNums.map((e) => {
  //               if( e.month === month) {
  //                   salesMonth.push(e)
  //               }
  //           })
  //           return salesMonth[0]
  //   }


  // *******************************************
  // *            Website Visitors             *
  // *******************************************

  this.getVisitors = () => {
    return $http.get(devUrl + '/visitors').then((res) => {
      return res
    })
  }

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

  this.getInventoryInfo = () => {
    return $http.get(devUrl + '/inventory').then((res) => {
      return res.data
    })
  }

  // *******************************************
  // *           Product Type Sold             *
  // *******************************************

  this.getProductInfo = function () {
    return $http.get(devUrl + '/product').then((res) => {
      return res
    })
  }


  // *******************************************
  // *           Product Inventory             *
  // *******************************************

  this.getPaymentInfo = () => {
    return $http.get(devUrl + '/payment').then((res) => {
      return res
    })
  }

})