angular
  .module('introToD3')
  .controller('Ex3Ctrl', ex3Ctrl);

function ex3Ctrl (Ex3Service, $timeout) {
  var self = this;
  self.working = 'is this working';

  Ex3Service.initialized.then(function () {
    $timeout(function () {
      self.parsedData = Ex3Service.getData();
    }, 1000);
  });
}
