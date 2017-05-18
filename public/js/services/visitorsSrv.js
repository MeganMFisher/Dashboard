angular.module('app').service('visitorsSrv', function ($http) {

  let devUrl = 'http://localhost:3500'

  // *******************************************
  // *            Website Visitors             *
  // *******************************************

  this.getVisitorsInfo = () => {
    return $http.get(devUrl + '/visitors').then((res) => {
      return res.data
    })
  }

  this.allVisitorInfo = (res, month) => {
    let visitors = res
            let monthVisitors = []
            visitors.map((e) => {
                let visitorDate = e.day.split('-')
                if(visitorDate[1] === month){
                  monthVisitors.push(e)
                  // monthVisitors.push(e.day)
                }
            })
            console.log(monthVisitors)
            return monthVisitors
  }

   this.visitorsInfo = (res, month) => {
        let visitors = res
            let monthVisitors = []
            let visitorsCount = []
            visitors.map((e) => {
                let visitorDate = e.day.split('-')
                if(visitorDate[1] === month){
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
            visitorsCount.push(visitorsTotal)
            visitorsCount.push(knownContacts)
            visitorsCount.push(pageVisits)

            return visitorsCount

    }


})