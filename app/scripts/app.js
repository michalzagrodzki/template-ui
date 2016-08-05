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
    'ui.router'
  ])
  .config(function($stateProvider) {

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: '/views/about.html'
      };

    var mainState = {
      name: 'main',
      url: '/',
      templateUrl: '/views/main.html'
    };

    $stateProvider.state(aboutState);
    $stateProvider.state(mainState);
  });
