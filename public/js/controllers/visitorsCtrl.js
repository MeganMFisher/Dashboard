 
 angular.module('app').controller('visitorsCtrl', function ($scope, visitorsSrv) {

    // *******************************************
    // *            Website Visitors             *
    // *******************************************


    visitorsSrv.getVisitorsInfo().then((res) => {
        $scope.visitors = visitorsSrv.visitorsInfo(res, '05')
    })


})