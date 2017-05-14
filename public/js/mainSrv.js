angular.module('app').service('mainSrv', function($http){
    
    let devUrl = 'http://localhost:3000'

  // *******************************************
  // *            Website Visitors             *
  // *******************************************

    this.getVisitors = () => {
      return $http.get(devUrl + '/visitors').then((res) => {
          return resp; 
      })
    }

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

    this.getSalesInfo = () => {
      return $http.get(devUrl + '/sales').then((res) => {
        return res;
      })
    }

  // *******************************************
  // *           Product Type Sold             *
  // *******************************************

    this.getProductInfo = function() {
      return $http.get(devUrl + '/product').then((res) => {
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
  // *           Product Inventory             *
  // *******************************************

    this.getPaymentInfo = () => {
        return $http.get(devUrl + '/payment').then((res) => {
            return res
        })
    }

})