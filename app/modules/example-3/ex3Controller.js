angular
  .module('introToD3')
  .controller('Ex3Ctrl', ex3Ctrl);

function ex3Ctrl (Ex3Service) {
  var self = this;
  self.data = Ex3Service.getData();
}
