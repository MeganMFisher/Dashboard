'use strict';

angular.module('app', []);
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *           Sales and Returns             *
    // *******************************************

    $scope.getSalesInfo = function () {
        mainSrv.getSalesInfo().then(function (res) {
            // console.log(res[0])
            $scope.sales = res;
        });
    };
    $scope.getSalesInfo();

    // *******************************************
    // *            Website Visitors             *
    // *******************************************

    $scope.getVisitors = function () {
        mainSrv.getVisitors().then(function (res) {
            // console.log(res)
            $scope.visitors = res.data;
        });
    };
    $scope.getVisitors();

    // *******************************************
    // *           Product Inventory             *
    // *******************************************

    $scope.getInventoryInfo = function () {
        mainSrv.getInventoryInfo().then(function (res) {
            // console.log(res)
            $scope.inventory = res;
        });
    };
    $scope.getInventoryInfo();

    // *******************************************
    // *           Product Type Sold             *
    // *******************************************

    $scope.getProductInfo = function () {
        mainSrv.getProductInfo().then(function (res) {
            // console.log(res)
            $scope.products = res.data;
        });
    };
    $scope.getProductInfo();

    // *******************************************
    // *           Payments Received             *
    // *******************************************

    $scope.getPaymentInfo = function () {
        mainSrv.getPaymentInfo().then(function (res) {
            // console.log(res)
            $scope.payments = res.data;
        });
    };
    $scope.getPaymentInfo();
});
'use strict';

angular.module('app').service('mainSrv', function ($http) {

  var devUrl = 'http://localhost:3000';

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

  this.getSalesInfo = function () {
    return $http.get(devUrl + '/sales').then(function (res) {
      return res.data;
    });
  };

  // *******************************************
  // *            Website Visitors             *
  // *******************************************

  this.getVisitors = function () {
    return $http.get(devUrl + '/visitors').then(function (res) {
      return res;
    });
  };

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

  this.getInventoryInfo = function () {
    return $http.get(devUrl + '/inventory').then(function (res) {
      return res.data;
    });
  };

  // *******************************************
  // *           Product Type Sold             *
  // *******************************************

  this.getProductInfo = function () {
    return $http.get(devUrl + '/product').then(function (res) {
      return res;
    });
  };

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

  this.getPaymentInfo = function () {
    return $http.get(devUrl + '/payment').then(function (res) {
      return res;
    });
  };
});