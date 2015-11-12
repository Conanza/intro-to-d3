angular
  .module('introToD3')
  .config(router);

function router ($stateProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'modules/home/home.html'
    });
}
