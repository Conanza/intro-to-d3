angular
  .module('introToD3')
  .service('Ex3Service', ex3Service);

function ex3Service ($http) {
  this.getData = function () {
    console.log('getting data for ex3 service');

    var parsedData = [];

    d3.csv('../../assets/data/data1.csv', function (data) {
      data.forEach(function (d) {
        parsedData.push(d);
      });
    });

    console.log(parsedData);
    return parsedData;
  };
}
