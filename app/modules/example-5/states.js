angular
  .module('introToD3')
  .config(ex5Router);

function ex5Router ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'example-5',
      url: 'example-5',
      controller: 'Ex5Ctrl',
      controllerAs: 'ex5',
      templateUrl: 'modules/example-5/ex5.html'
    });
}
