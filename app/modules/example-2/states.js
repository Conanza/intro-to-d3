angular
  .module('introToD3')
  .config(ex2Router);

function ex2Router ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'example-2',
      url: 'example-2',
      templateUrl: 'modules/example-2/ex2.html'
    });
}
