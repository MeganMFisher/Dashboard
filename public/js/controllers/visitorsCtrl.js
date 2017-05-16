 
 angular.module('app').controller('visitorsCtrl', function ($scope, mainSrv) {

    // *******************************************
    // *            Website Visitors             *
    // *******************************************

 
    let getVisitors = (monthSelected) => {
        mainSrv.getVisitors().then((res) => {
             let visitors = res.data
             console.log(visitors)
            let monthVisitors = []
            visitors.map((e) => {
                let visitorDate = e.day.split('-')
                if(visitorDate[1] === monthSelected){
                  monthVisitors.push(e)
                }
            })
            let visitorsTotal = 0
            let pageVisits = 0
            let knownContacts = 0
            
            monthVisitors.map((e) =>{
                visitorsTotal += e.visitors
                pageVisits += e.pagevisits
                knownContacts += e.knowncontacts
            })
            $scope.visitors = visitorsTotal
            $scope.pageVisit = pageVisits
            $scope.contacts = knownContacts
        })
    }
    getVisitors('05')

})