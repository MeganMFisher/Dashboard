angular.module('app').service('mainSrv', function ($http) {

  let devUrl = 'http://localhost:3500'


  // // *******************************************
  // // *            Website Visitors             *
  // // *******************************************

  // this.getVisitors = () => {
  //   return $http.get(devUrl + '/visitors').then((res) => {
  //     return res
  //   })
  // }

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