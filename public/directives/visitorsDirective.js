angular.module('app')
  .directive('visitorsBar', function () {
    return {
      restrict: 'AE',
      template: '<div id="visitorsBar"></div>',
      scope: {
        visitorsData: '='
      },
      controller: function ($scope) {

        $scope.$watch('visitorsData', function(newVal, oldVal){
            // console.log($scope.visitorsData) //fire function that rebuilds
        })

        // visitorsSrv.getVisitorsInfo().then((res) => {
        //   $scope.graphVisitorData = visitorsSrv.allVisitorInfo(res, '05')
        //   // console.log($scope.graphVisitorData)
        // })

      },

    }
  })