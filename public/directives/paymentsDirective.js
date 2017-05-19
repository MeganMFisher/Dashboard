angular.module('app')
  .directive('paymentsLine', function () {
    return {
      restrict: 'AE',
      template: '<div id="paymentsLine"></div>',
      // scope: {},
      controller: function($scope, paymentsSrv) {

      paymentsSrv.getPaymentInfo().then((res) => {
        $scope.graphPaypalData = paymentsSrv.allPaypalPaymentInfo(res, '05')
        // console.log($scope.graphPaypalData)
    })
 
    },
      
    }
  })