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
          {day: 1, visitors: 100},
          {day: 2, visitors: 100},
          {day: 3, visitors: 100},
          {day: 4, visitors: 100},
          {day: 5, visitors: 100},
          {day: 6, visitors: 100},
          {day: 1, visitors: 100}
        ]

        let visitorsGraphData = $scope.visitorsData
          let data = []
          let num = 100

          // visitorsGraphData.map((e) => {
          //   data.push(e.day)
          //   num.push(e.visitors)
          // })      

        var margin = {
          top: 40,
          right: 30,
          bottom: 40,
          left: 50
        }
        // var height = document.getElementById('visitorsBar').offsetHeight - 100 - margin.top - margin.bottom;
        // var width = document.getElementById('visitorsBar').offsetWidth - margin.right - margin.left;
        var height = 100;
        var width = 200;
  

        var x = d3.scaleBand()
          .domain(data.map(function (d) {
            return d[0];
          }))
          .range([0, width])
          .padding(.1);

        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function (d) {
            return d[1];
          })])
          .range([height, 0]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y)

        // var tip = d3.tip()
        //   .attr('class', 'd3-tip')
        //   .offset([-10, 0])
        //   .html(function (d) {
        //     return "<strong>Student:</strong> <span style='color:#21AAE1'> " + d[0] + "</span>";
        //   })
        //   .style('font-size', '11px')

        var svg = d3.select("#visitorsBar").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        // svg.call(tip);


        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Student");

        svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
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
            if (d[1] >= num) return '#21AAE1'
            else return '#141414';
          })
          .on('mouseover', function (d) {
            tip.show(d)
            if (d[1] >= num) {
              d3.select(this)
                .attr("fill", "#297FAA");
            } else {
              d3.select(this)
                .attr("fill", "#000");
            }
          })
          .on('mouseout', function (d) {
            tip.hide(d)
            if (d[1] >= num) {
              d3.select(this)
                .attr("fill", '#21AAE1');
            } else {
              d3.select(this)
                .attr("fill", "#141414");
            }
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
          .on('mouseover', function (d) {
              tip.show(d)
              if (d[1] >= num) {
                d3.select(this)
                  .attr("fill", "#297FAA");
              } else {
                d3.select(this)
                  .attr("fill", "#000");
              }
            })
            .on('mouseout', function (d) {
              tip.hide(d)
              if (d[1] >= num) {
                d3.select(this)
                  .attr("fill", '#21AAE1');
              } else {
                d3.select(this)
                  .attr("fill", "#141414");
              }
            })


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
            if (d[1] >= num) return '#21AAE1'
            else return '#141414';
          })
          
          ya.transition().duration(1000).call(yAxis)
        }


        $scope.$watch('visitorsData', function(newVal, oldVal){
          let visitorsGraphData = $scope.visitorsData
          let data = []
          let num = 100

          visitorsGraphData.map((e) => {
            data.push([e.day, e.visitors])
        
          })
            console.log(data) 

            updateBarChart(data, num)
        })


      },

    }
  })