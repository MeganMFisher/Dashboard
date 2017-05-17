 
 angular.module('app').controller('visitorsCtrl', function ($scope, visitorsSrv) {

    // *******************************************
    // *            Website Visitors             *
    // *******************************************

    $scope.visitors;
    console.log($scope.visitors)

        visitorsSrv.getVisitorsInfo().then((res) => {
            $scope.visitors = visitorsSrv.visitorsInfo(res, '05')
        })

})