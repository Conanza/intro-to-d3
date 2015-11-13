angular
  .module('introToD3')
  .controller('Ex3Ctrl', ex3Ctrl);

function ex3Ctrl (Ex3Service, $timeout) {
  var self = this;

  Ex3Service.initialized.then(function () {
    // fake async
    $timeout(function () {
      self.parsedData = Ex3Service.getData();
    }, 5000);
  });
}
