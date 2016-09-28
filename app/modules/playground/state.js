function pgRouter ($stateProvider) {
  $stateProvider
    .state({
      parent: 'home',
      name: 'playground',
      url: 'pg',
      controller: 'pgCtrl',
      controllerAs: 'pg',
      bindToController: true,
      templateUrl: 'modules/playground/playground.html'
    });
}

angular
  .module('introToD3')
  .config(pgRouter);
