angular.module('app')
  .directive('visitorsBar', function () {
    return {
      // restrict: 'AE',
      // template: '<div id="visitorsBar"></div>',
      // scope: {},
      controller: function($scope, visitorsSrv) {

      $scope.visitorData = visitorsSrv.getVisitorsInfo();
        console.log($scope.visitorData)

      // $scope.visitorsData = visitorsSrv.allVisitorInfo()

      //   // let visitorData = $scope.visitorData
      //   console.log($scope.visitorData)
 
    },
      
    }
  })