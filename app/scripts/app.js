'use strict';

/**
 * @ngdoc overview
 * @name uiTemplateApp
 * @description
 * # uiTemplateApp
 *
 * Main module of the application.
 */
angular
  .module('uiTemplateApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
