angular
  .module('introToD3')
  .config(router);

function router ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
