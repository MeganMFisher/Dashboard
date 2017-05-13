angular.module('app').controller('mainCtrl', function($scope, mainSrv){

    $scope.test = 'controller'
    $scope.test1 = mainSrv.test1
})