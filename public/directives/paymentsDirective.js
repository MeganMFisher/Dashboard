angular.module('app')
  .directive('paymentsLine', function () {
    return {
      restrict: 'AE',
      template: '<div id="paymentsLine"></div>',
      scope: {
        paymentsData: '='
      },
      controller: function($scope, paymentsSrv) {

        $scope.paymentsData = [
          {date: 1, number: 0, numberTwo: 0},
          {date: 2, number: 0, numberTwo: 0},
          {date: 3, number: 0, numberTwo: 0},
          {date: 4, number: 0, numberTwo: 0},
          {date: 5, number: 0, numberTwo: 0},
          {date: 6, number: 0, numberTwo: 0},
          {date: 7, number: 0, numberTwo: 0},
          {date: 8, number: 0, numberTwo: 0},
          {date: 9, number: 0, numberTwo: 0},
          {date: 10, number: 0, numberTwo: 0},
          {date: 11, number: 0, numberTwo: 0},
          {date: 12, number: 0, numberTwo: 0},
          {date: 13, number: 0, numberTwo: 0},
          {date: 14, number: 0, numberTwo: 0},
          {date: 15, number: 0, numberTwo: 0},
          {date: 16, number: 0, numberTwo: 0},
          {date: 17, number: 0, numberTwo: 0},
          {date: 18, number: 0, numberTwo: 0},
          {date: 19, number: 0, numberTwo: 0},
          {date: 20, number: 0, numberTwo: 0},
          {date: 21, number: 0, numberTwo: 0},
          {date: 22, number: 0, numberTwo: 0},
          {date: 23, number: 0, numberTwo: 0},
          {date: 24, number: 0, numberTwo: 0},
          {date: 25, number: 0, numberTwo: 0},
          {date: 26, number: 0, numberTwo: 0},
          {date: 27, number: 0, numberTwo: 0},
          {date: 28, number: 0, numberTwo: 0},
          {date: 29, number: 0, numberTwo: 0},
          {date: 30, number: 0, numberTwo: 0}
        ]

        var data = $scope.paymentsData;

          var margin = {
            top: 0,
            right: 30,
            bottom: 0,
            left: 30
          };

        var width = document.getElementById('paymentsLineChartDiv').offsetWidth - margin.right - margin.left;
        var height = document.getElementById('paymentsLineChartDiv').offsetHeight - margin.top - margin.bottom;

        var bisectDate = d3.bisector(function (d) {
          return d.date;
        }).left

        var x = d3.scaleTime()
          .range([0, width]);

        var y = d3.scaleLinear()
          .range([height, 0]);

        var xAxis = d3.axisBottom(x)

        var yAxis = d3.axisLeft(y)
          .ticks(5);

        var line = d3.line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.number);
          });

           var lineTwo = d3.line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.numberTwo);
          });


        var areaFunction = d3.area()
          .x(function (d) {
            return x(d.date);
          })
          .y0(height)
          .y1(function (d) {
            return y(d.number);
          });

        var svg = d3.select("#paymentsLine").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
        // x.domain([0, 100])

        // let maxDomain = 20;
        // if ((d3.max(data, function (d) {
        //     return d.number;
        //   }) * 1.1) > 20) {
        //   maxDomain = d3.max(data, function (d) {
        //     return d.number;
        //   }) * 1.1
        // }

        // y.domain([0, maxDomain])

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) {
	        return Math.max(d.number, d.numberTwo); })]);

        svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line)

        svg.append("path")
          .data(data)
          .attr("class", "line")
          // .style("stroke", "#7673e2")
          .attr("d", lineTwo);


        var focus = svg.append("g")
          .attr("class", "focus")
          .style("display", "none");

        let overlayWidth = (width * (($scope.paymentsData.length - 1) / 100)) - 1

        svg.append("rect")
          .attr("class", "overlay")
          .attr("width", overlayWidth)
          .attr("height", height)
          .on("mouseover", function () {
            focus.style("display", null);
          })
          .on("mouseout", function () {
            focus.style("display", "none");
          })
          .on("mousemove", function mousemove() {
            var x0 = x.invert(d3.mouse(this)[0]),
              i = bisectDate(data, x0, 1),
              d0 = data[i - 1],
              d1 = data[i],
              d = x0 - d0.date > d1.date - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + x(d.date) + "," + y(d.number) + ")");
            focus.select("text").text(d.number);
          });

           // -------- UPDATE Graph with Data -------- // 


        let updatePaymentsData = (someData) => {
           var newData = $scope.paymentsData;

          let maxDomain = 20;
          if ((d3.max(newData, function (d) {
              return d.number;
            }) * 1.1) > 20) {
            maxDomain = (d3.max(newData, function (d) {
              return d.number;
            }) * 1.1) + 5
          }
        //   x.domain(d3.extent(data, function(d) { return d.date; }));
        // y.domain([0, d3.max(data, function(d) {
	      //   return Math.max(d.number, d.numberTwo); })]);

          var yD = d3.scaleLinear()
            .range([height, 0]).domain([0, maxDomain])

          yAxis = d3.axisLeft(yD)
            .ticks(5);

          var newLine = d3.line()
            .x(function (d) {
              return x(d.date);
            })
            .y(function (d) {
              return yD(d.number);
            });


           var newLineTwo = d3.line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.numberTwo);
          });

          var areaFunction = d3.area()
            .x(function (d) {
              return x(d.date);
            })
            .y0(height)
            .y1(function (d) {
              return yD(d.number);
            });


          var ya = d3.select('#paymentsLine')
            .selectAll('.y.axis')

          var lines = d3.select('#paymentsLine')
            // .selectAll('.line', '.lineTwo')
            .selectAll('.line')
            .datum(newData)

          /////// Hover over line

          // var focus = svg.append("g")
          //   .attr("class", "focus")
          //   .style("display", "none");


          // focus.append("rect")
          //   .attr("width", 55)
          //   .attr("height", 30)
          //   .attr("x", -28)
          //   .attr("y", -49.7)
          //   .attr('fill', 'rgba(0, 0, 0, 0.8)')
          //   .attr("rx", 2)
          //   .attr("ry", 2)

          // focus.append("path") 

          //   .attr('fill', 'rgba(0, 0, 0, 0.8)')
          //   .attr("d", "M -5, -20, L 5, -20, L 0, -10 Z")

          // focus.append("text")
          //   .attr("dx", -12)
          //   .attr("dy", -31)
          //   .attr("offset", "100%")
          //   .attr('fill', '#0fe997')
          //   .style('font-size', '11px')

          /////////////////////

          let overlayWidth = (width * (($scope.paymentsData.length - 1) / 100)) - 1

          svg.append("rect")
            .attr("class", "overlay")
            .attr("width", overlayWidth)
            .attr("height", height)
            .on("mouseover", function () {
              focus.style("display", null);
            })
            .on("mouseout", function () {
              focus.style("display", "none");
            })
            .on("mousemove", function mousemove() {
              var x0 = x.invert(d3.mouse(this)[0]),
                i = bisectDate(newData, x0, 1),
                d0 = newData[i - 1],
                d1 = newData[i],
                d = x0 - d0.date > d1.date - x0 ? d1 : d0;
              focus.attr("transform", "translate(" + x(d.date) + "," + yD(d.number) + ")");
              // focus.select("text").text(d.number);
            });


          var gradient = d3.select('#paymentsLine').selectAll(".area")

          lines.transition()
            .duration(1000)
            .attr("d", newLine)
            // .attr("d", newLineTwo)

          ya.transition().duration(1000).call(yAxis)
        }
          
         $scope.$watch('paymentsData', function(newValue, oldValue){
          updatePaymentsData($scope.paymentsData)
          
        })

 
    },
      
    }
  })