 
 angular.module('app').controller('visitorsCtrl', function ($scope, visitorsSrv) {

    // *******************************************
    // *            Website Visitors             *
    // *******************************************

        visitorsSrv.getVisitorsInfo().then((res) => {
            $scope.graphVisitorData = visitorsSrv.allVisitorInfo(res, '05')
            // console.log($scope.graphVisitorData)
            $scope.visitors = visitorsSrv.visitorsInfo(res, '05')
            // console.log($scope.visitors)

        })

})