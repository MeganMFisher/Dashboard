angular.module('app')
  .directive('paymentsLine', function () {
    return {
      restrict: 'AE',
      template: '<div id="paymentsLine"></div>',
      scope: {
        paymentsData: '='
      },
      controller: function($scope, paymentsSrv) {

         $scope.$watch('paymentsData', function(){
          // console.log($scope.paymentsData)
        })

 
    },
      
    }
  })