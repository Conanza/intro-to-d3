angular
  .module('introToD3')
  .config(ex1Router);

function ex1Router ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'example-1',
      url: 'example-1',
      templateUrl: 'modules/example-1/ex1.html'
    });
}
