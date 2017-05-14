angular.module('app').service('mainSrv', function ($http) {

  let devUrl = 'http://localhost:3000'

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

  this.getSalesInfo = () => {
    return $http.get(devUrl + '/sales').then((res) => {
      return res.data
    })
  }


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
      return res
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