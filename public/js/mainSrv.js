angular.module('app').service('mainSrv', function($http){
    
    let devUrl = 'http://localhost:3000'

     this.getVisitors = function() {
      return $http.get(devUrl + '/visitors').then(function(resp){
        return resp;
      })
    }

})