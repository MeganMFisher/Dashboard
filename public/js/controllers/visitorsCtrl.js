 
 angular.module('app').controller('visitorsCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *            Website Visitors             *
    // *******************************************

 
    let getVisitors = () => {
        mainSrv.getVisitors().then((res) => {
             let visitors = res.data
            //  console.log(visitors)
            let monthVisitors = []
            visitors.map((e) => {
                let visitorDate = e.day.split('-')
                if(visitorDate[1] === '05'){
                  monthVisitors.push(e)
                }
            })
            let visitorsTotal = 0
            monthVisitors.map((e) =>{
                visitorsTotal += e.visitors
            })
            $scope.visitors = visitorsTotal
            // console.log($scope.visitors)

            let pageVisits = 0
            monthVisitors.map((e) =>{
                pageVisits += e.pagevisits
            })
            $scope.pageVisit = pageVisits
            // console.log($scope.pageVisit)

            let knownContacts = 0
            monthVisitors.map((e) =>{
                knownContacts += e.knowncontacts
            })
            $scope.contacts = knownContacts
            // console.log($scope.contacts)
        })
    }
    getVisitors()

})