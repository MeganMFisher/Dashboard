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
          {date: 1, number: 0},
          {date: 2, number: 0},
          {date: 3, number: 0},
          {date: 4, number: 0},
          {date: 5, number: 0},
          {date: 6, number: 0},
          {date: 7, number: 0},
          {date: 8, number: 0},
          {date: 9, number: 0},
          {date: 10, number: 0},
          {date: 11, number: 0},
          {date: 12, number: 0},
          {date: 13, number: 0},
          {date: 14, number: 0},
          {date: 15, number: 0},
          {date: 16, number: 0},
          {date: 17, number: 0},
          {date: 18, number: 0},
          {date: 19, number: 0},
          {date: 20, number: 0},
          {date: 21, number: 0},
          {date: 22, number: 0},
          {date: 23, number: 0},
          {date: 24, number: 0},
          {date: 25, number: 0},
          {date: 26, number: 0},
          {date: 27, number: 0},
          {date: 28, number: 0},
          {date: 29, number: 0},
          {date: 30, number: 0},
  
        ]

        var data = $scope.paymentsData;

          var margin = {
            top: 50,
            right: 0,
            bottom: 0,
            left: -1
          };
          var width = 2400;
          var height = 180;

        // var width = document.getElementById('cohortLineChartDiv').offsetWidth - margin.right - margin.left;
        // var height = document.getElementById('cohortLineChartDiv').offsetHeight - margin.top - margin.bottom - 80;

        var bisectDate = d3.bisector(function (d) {
          return d.date;
        }).left

        var x = d3.scaleTime()
          .range([0, width]);

        var y = d3.scaleLinear()
          .range([height, 0]);

        var xAxis = d3.axisBottom(x)
        // .ticks(d3.timeMinute.every(30))
        // .tickFormat(d3.timeFormat("%I:%M"));

        var yAxis = d3.axisLeft(y)
          .ticks(5);

        var line = d3.line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.number);
          });

          // var	line2 = d3.line()
	        //   .x(function(d) { 
          //     return x(d.date); 
          //   })
	        //   .y(function(d) { 
          //     return y(d.open); }
          //     );

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

        // var tip = d3.tip()
        //   .attr('class', 'd3-tip')
        //   .offset([-10, 0])
        //   .html(function (d) {
        //     return "<strong>number:</strong> <span style='color:#21AAE1'>" + d.number + "</span>";
        //   })

        // svg.call(tip)

        // var areaGradient = svg.append('defs')
        //   .append("linearGradient")
        //   .attr('id', 'areaGradient')
        //   .attr("x1", "0%").attr("y1", "0%")
        //   .attr("x2", "0%").attr("y2", "100%");

        // areaGradient.append("stop")
        //   .attr("offset", "0%")
        //   .attr("stop-color", "#0fe997")
        //   .attr("stop-opacity", 0.5);

        // areaGradient.append("stop")
        //   .attr("offset", "50%")
        //   .attr("stop-color", "#0fe997")
        //   .attr("stop-opacity", 0.1);

        // areaGradient.append("stop")
        //   .attr("offset", "100%")
        //   .attr("stop-color", "#0fe997")
        //   .attr("stop-opacity", 0);

  
        x.domain([0, 100])

        let maxDomain = 20;
        if ((d3.max(data, function (d) {
            return d.number;
          }) * 1.1) > 20) {
          maxDomain = d3.max(data, function (d) {
            return d.number;
          }) * 1.1
        }

        y.domain([0, maxDomain])

        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)

        svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line)

          // svg.append("path")		// Add the valueline2 path.
		      // .datum(data1)
		      // .style("stroke", "red")
		      // .attr("d", line2);

        svg.append("path")
          .attr("class", "area")
          .style("fill", "url(#areaGradient)")
          .attr("d", areaFunction(data))

        var focus = svg.append("g")
          .attr("class", "focus")
          .style("display", "none");

        focus.append("circle")
          .attr("r", 2);

        focus.append("rect")
          .attr("width", 55)
          .attr("height", 30)
          .attr("x", -28)
          .attr("y", -49.7)
          .attr('fill', 'rgba(0, 0, 0, 0.8)')
          .attr("rx", 2)
          .attr("ry", 2)

        focus.append("path") //shape for triangle                       
          .attr('fill', 'rgba(0, 0, 0, 0.8)')
          .attr("d", "M -5, -20, L 5, -20, L 0, -10 Z")

        focus.append("text")
          .attr("dx", -12)
          .attr("dy", -31)
          .attr("offset", "100%")
          .attr('fill', '#0fe997')
          .style('font-size', '11px')

        focus.append("line")
          .attr("class", "x-hover-line hover-line")
          .attr("y1", 0)
          .attr("y2", height)

        focus.append("line")
          .attr("class", "y-hover-line hover-line")
          .attr("x1", width)
          .attr("x2", width);

        let overlayWidth = (width * (($scope.paymentsData.length - 1) / 100)) - 1

        svg.append("rect")
          .attr("class", "overlay")
          // .attr("width", overlayWidth)
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

           // ******** UPDATE DATA FUNCTION FOR PROJECT SELECTED ********* // 


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
            .selectAll('.line')
            .datum(newData)

          var focus = svg.append("g")
            .attr("class", "focus")
            .style("display", "none");

          focus.append("circle")
            .attr("r", 2);

          focus.append("rect")
            .attr("width", 55)
            .attr("height", 30)
            .attr("x", -28)
            .attr("y", -49.7)
            .attr('fill', 'rgba(0, 0, 0, 0.8)')
            .attr("rx", 2)
            .attr("ry", 2)

          focus.append("path") //shape for triangle                       
            .attr('fill', 'rgba(0, 0, 0, 0.8)')
            .attr("d", "M -5, -20, L 5, -20, L 0, -10 Z")

          focus.append("text")
            .attr("dx", -12)
            .attr("dy", -31)
            .attr("offset", "100%")
            .attr('fill', '#0fe997')
            .style('font-size', '11px')

          focus.append("line")
            .attr("class", "x-hover-line hover-line")
            .attr("y1", 0)
            .attr("y2", height)

          focus.append("line")
            .attr("class", "y-hover-line hover-line")
            .attr("x1", width)
            .attr("x2", width);

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
              focus.select("text").text(d.number);
            });


          var gradient = d3.select('#paymentsLine').selectAll(".area")


          gradient.transition()
            .duration(1000)
            .attr("d", areaFunction(newData))
            .style("fill", "url(#areaGradient)")
          lines.transition()
            .duration(1000)
            .attr("d", newLine)

          ya.transition().duration(1000).call(yAxis)

        }
          


         $scope.$watch('paymentsData', function(newValue, oldValue){
          //  console.log($scope.paymentsData)
          updatePaymentsData($scope.paymentsData)
          
        })

 
    },
      
    }
  })