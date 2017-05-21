angular.module('app')
  .directive('productPie', function () {
    return {
      restrict: 'AE',
      template: '<div id="productPie"></div>',
      scope: {
        productData: '='
      },
      controller: function ($scope) {

       $scope.productData = [
          {percent: 25},
          {percent: 25},
          {percent: 25},
          {percent: 25}
        ]

        let productData = $scope.productData
        productData = [productData[0].percent, productData[1].percent, productData[2].percent, productData[3].percent]

        var height = 180;
        var width = 180;
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

        var color = d3.scaleOrdinal()
          .range(["#0fe997", "#06f0e9", "#7673e2", '#f476cf']);

        g.append("path")
          .attr("d", arc)
          .style("fill", function (d, i) {
            return color(i);
          })

        let updateProductData = (data) => {
          productData = [data[0].percent, data[1].percent, data[2].percent, data[3].percent]
          let pie = d3.pie().value(function (d) {
            return d;
          })(productData);
          let path = d3.select('#productPie').selectAll('path').data(pie)
          path.transition().duration(500).attrTween("d", arcTween)
        }

        function arcTween(a) {
          let i = d3.interpolate(this._current, a);
          this._current = i(0);
          return function (t) {
            return arc(i(t));
          };
        }

       $scope.$watch('productData', function(newVal, oldVal){
         updateProductData($scope.productData)
       })

      },

    }
  })