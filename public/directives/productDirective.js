angular.module('app')
  .directive('productPie', function () {
    return {
      restrict: 'AE',
      template: '<div id="productPie"></div>',
      scope: {
        productData: '='
      },
      controller: function ($scope) {

       

        let productData = $scope.productData
        productData = [productData[0].percent, productData[1].percent, productData[2].percent, productData[3].percent]

        var height = document.getElementById('productDiv').offsetHeight / 3;
        var width = height;
        var radius = Math.min(width, height) / 2;

        var arc = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

        var pie = d3.pie()
          .sort(null)
          .value(function (d) {
            return d;
          });

        var svg = d3.select("#productPie").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var g = svg.selectAll(".arc")
          .data(pie(productData))
          .enter().append("g")
          .attr("class", "arc");

        var gradient = svg.append("defs")
          .append("linearGradient")
          .attr("id", "gradient")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "100%")
          .attr("spreadMethod", "pad");

        gradient.append("stop")
          .attr("offset", "0%")
          .attr("stop-color", "#999")
          .attr("stop-opacity", 1);

        gradient.append("stop")
          .attr("offset", "100%")
          .attr("stop-color", "#111")
          .attr("stop-opacity", 1);

        var color = d3.scaleOrdinal()
          .range(["#25AAE1", "#297FAA", "#1C648C", 'url(#gradient)']);

        g.append("path")
          .attr("d", arc)
          .style("fill", function (d, i) {
            return color(i);
          })

        let updateproductData = (data) => {
          productData = [data[0].percent, data[1].percent, data[2].percent, data[3].percent]
          console.log(productData)
          let pie = d3.pie().value(function (d) {
            return d;
          })(productData);
          path = d3.select('#productPie').selectAll('path').data(pie)
          path.transition().duration(500).attrTween("d", arcTween)
        }

        function arcTween(a) {
          let i = d3.interpolate(this._current, a);
          this._current = i(0);
          return function (t) {
            return arc(i(t));
          };
        }

        // $scope.$watch('averageData', function (newValue, oldValue) {
        //   updateAverageData($scope.averageData)
        // })

       $scope.$watch('productData', function(newVal, oldVal){
        //  updateproductData($scope.productData)
         console.log($scope.productData)
       })

      },

    }
  })