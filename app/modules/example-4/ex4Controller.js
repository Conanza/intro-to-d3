angular
  .module('introToD3')
  .controller('Ex4Ctrl', ex4Ctrl);

function ex4Ctrl () {
  var self = this;

  self.linearScale = d3.scale.linear()
    .domain([0, 10])
    .range([0, 100]);

  self.ordinalScale = d3.scale.ordinal()
    .domain(['A', 'B', 'C'])
    .range(['top', 'middle', 'bottom']);

  self.ordinalScale2 = d3.scale.ordinal()
    .domain(['A', 'B', 'C'])
    .rangePoints([0, 100]);
}
