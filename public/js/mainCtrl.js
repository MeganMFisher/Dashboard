angular.module('app').controller('mainCtrl', function($scope, mainSrv){

    
      mainSrv.getVisitors().then(function (resp) {
        $scope.visitorss = resp.data;
      });
    
})