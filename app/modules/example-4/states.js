angular
  .module('introToD3')
  .config(ex4Router);

function ex4Router ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'example-4',
      url: 'example-4',
      controller: 'Ex4Ctrl',
      controllerAs: 'ex4',
      templateUrl: 'modules/example-4/ex4.html'
    });
}
