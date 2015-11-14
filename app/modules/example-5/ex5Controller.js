angular
  .module('introToD3')
  .controller('Ex5Ctrl', ex5Ctrl);

function ex5Ctrl () {
  var self = this;
  self.array = [1, 2, 2.5];
  self.anotherArray = [1, 2, 3, 4, 5];
  self.lastArray = [4, 5];

  var scale = d3.scale.linear()
    .domain([1, 5])
    .range([0, 200]);

  var svg = d3.select('.example-5').append('svg')
    .attr('width', 250)
    .attr('height', 250);

  self.render = function (data, color, renderType) {
    // bind the data
    var rects = svg.selectAll('rect').data(data);

    if (renderType === 'update' || renderType === 'exit') {
      // enter phase: #enter returns the enter selection,
      // placeholder nodes for missing elements
      rects.enter().append('rect')
        // static properties
        .attr('y', 50)
        .attr('width', 20)
        .attr('height', 20);

      // update phase/selection
      rects
        .attr('x', scale) // pass data point to scale function, returns value in range
        .attr('fill', color);

      if (renderType === 'exit') {
        // returns exit selection:
        // returns elements that are no longer needed,
        // DOM elements in selection for which no new data is found
        rects.exit().remove();
      }
    } else if (renderType === 'enter') {
      rects.enter().append('rect')
        .attr('y', 50)
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', scale)
        .attr('fill', color);
    }
  };
}
