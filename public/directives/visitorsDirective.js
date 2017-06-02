angular.module('app')
  .directive('visitorsBar', function () {
    return {
      restrict: 'AE',
      template: '<div id="visitorsBar"></div>',
      scope: {
        visitorsData: '='
      },
      controller: function ($scope) {

        $scope.visitorsData = [
          { day: 1,  visitors: 0 }, 
          { day: 2,  visitors: 0 }, 
          { day: 3,  visitors: 0 }, 
          { day: 4,  visitors: 0 },
          { day: 5,  visitors: 0 }, 
          { day: 6,  visitors: 0 }, 
          { day: 7,  visitors: 0 }, 
          { day: 8,  visitors: 0 },
          { day: 9,  visitors: 0 }, 
          { day: 10,  visitors: 0 }, 
          { day: 11,  visitors: 0 }, 
          { day: 12,  visitors: 0 },
          { day: 13,  visitors: 0 }, 
          { day: 14,  visitors: 0 }, 
          { day: 15,  visitors: 0 }, 
          { day: 16,  visitors: 0 },
          { day: 17,  visitors: 0 }, 
          { day: 18,  visitors: 0 }, 
          { day: 19,  visitors: 0 }, 
          { day: 20,  visitors: 0 },
          { day: 21,  visitors: 0 }, 
          { day: 22,  visitors: 0 }, 
          { day: 23,  visitors: 0 }, 
          { day: 24,  visitors: 0 },
          { day: 25,  visitors: 0 }, 
          { day: 26,  visitors: 0 },
          { day: 27,  visitors: 0 }, 
          { day: 28,  visitors: 0 }, 
          { day: 29,  visitors: 0 }, 
          { day: 30,  visitors: 0 }
        ]

          let visitorsArr = $scope.visitorsData
          let data = []
          let num = 200

            for(let i = 0; i < visitorsArr.length; i++) {
              data.push([i + 1, visitorsArr[i].visitors])
            }


        var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }

        var width = document.getElementById('visitorsGraphBoxDiv').offsetWidth - margin.right - margin.left - 50;
        var height = document.getElementById('visitorsGraphBoxDiv').offsetHeight - margin.top - margin.bottom - 50;


        var x = d3.scaleBand()
          .domain(data.map(function (d) {
            return d[0];
          }))
          .range([0, width])
          .padding(.5);

        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function (d) {
            return d[1];
          })])
          .range([height, 0]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y)


        var svg = d3.select("#visitorsBar").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
        svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("rx", 3)
          .attr("class", "bar")
          .attr("x", function (d) {
            return x(d[0]);
          })
          .attr("width", x.bandwidth())
          .attr("y", function (d) {
            return y(d[1]);
          })
          .attr("height", function (d) {
            return height - y(d[1]);
          })
          .attr('fill', function (d) {
            if (d[1] > num) return '#06f0e9'
            else if(d[1] <= num && d[1] >= 100) return '#079691'
            else return '#036865';
          })

        function type(d) {
          d[1] = +d[1];
          return d;
        }


        let updateBarChart = (newData, num) => {

          var yD = d3.scaleLinear().domain([0, d3.max(newData, function (d) {
            return d[1];
          })]).range([height - 20, 0]);

          var yAxis = d3.axisLeft(yD)
          var ya = d3.select('#visitorsBar')
                    .selectAll('.y.axis')

        var bars = d3.select('#visitorsBar')
          .selectAll(".bar")
          .data(newData)
          .attr("y", height)
          .attr("height", 0)

          bars.transition()
              .duration(1000)
              .attr("width", x.bandwidth())
          .attr("y", function (d) {
            return yD(d[1]);
          })
          .attr("height", function (d) {
            return height - yD(d[1]);
          })
          .attr('fill', function (d) {
            if (d[1] > num) return '#06f0e9'
            else if(d[1] <= num && d[1] >= 100) return '#079691'
            else return '#036865';

          })
          
          ya.transition().duration(1000).call(yAxis)
        }


        $scope.$watch('visitorsData', function(newVal, oldVal){
          let visitorsArr = $scope.visitorsData
          let data = []
          let num = 200

            for(let i = 0; i < visitorsArr.length; i++) {
              data.push([i + 1, visitorsArr[i].visitors])
            }
        
            updateBarChart(data, num)
          })

      },

    }
  })