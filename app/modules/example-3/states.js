angular
  .module('introToD3')
  .config(ex3Router);

function ex3Router ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'example-3',
      url: 'example-3',
      controller: 'Ex3Ctrl',
      controllerAs: 'ex3',
      templateUrl: 'modules/example-3/ex3.html'
    });
}
