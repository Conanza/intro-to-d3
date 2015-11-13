angular
  .module('introToD3')
  .service('Ex3Service', ex3Service);

function ex3Service ($http, $q) {
  var service = {};
  var parsedData = [];
  var _initialized = $q.defer();

  d3.csv('../../assets/data/data1.csv', function (data) {
    data.forEach(function (d) {
      parsedData.push(d);
    });

    if (parsedData.length > 0) _initialized.resolve(true);
  });

  service.getData = function () {
    return parsedData;
  };

  service.initialized = _initialized.promise;

  return service;
}
