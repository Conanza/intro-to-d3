angular
  .module('introToD3')
  .controller('pgCtrl', function () {
    this.title = 'title';

    var q = [];

    for (let i = 0, len = 6; i < len; i++) { // use let vs var to scope i to this for block
      // use IIFE to create local scope
      // var fn = (function (x) {
      //   return function () {
      //     console.log(x);
      //   };
      // })(i);

      var fn = () => console.log(i);

      q.push(fn);
    }

    q.forEach(f => f());
  });
