angular.module('app')
  .directive('visitorsBar', function () {
    return {
      restrict: 'AE',
      template: '<div id="visitorsBar"></div>',
      // scope: {},
      controller: function($scope, visitorsSrv) {

        visitorsSrv.getVisitorsInfo().then((res) => {
          $scope.graphVisitorData = visitorsSrv.allVisitorInfo(res, '05')
          // console.log($scope.graphVisitorData)
        })
 
    },
      
    }
  })