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

    var LandingPageState = {
      name: 'LandingPage',
      url: '/landing_page',
      templateUrl: '/views/landing_page.html'
    };

    var PortfolioState = {
      name: 'Portfolio',
      url: '/portfolio',
      templateUrl: '/views/portfolio.html'
    };

    var ArticleState = {
      name: 'Article',
      url: '/article',
      templateUrl: '/views/article.html'
    };

    var FormState = {
      name: 'Form',
      url: '/form',
      templateUrl: '/views/form.html'
    };

    var LoginState = {
      name: 'Login',
      url: '/login',
      templateUrl: '/views/login.html'
    };

    var CalendarState = {
      name: 'Calendar',
      url: '/calendar',
      templateUrl: '/views/calendar.html'
    };

    var TableState = {
      name: 'Table',
      url: '/table',
      templateUrl: '/views/table.html'
    };

    var ItemsListState = {
      name: 'ItemsList',
      url: '/list',
      templateUrl: '/views/list.html'
    };

    $stateProvider.state(aboutState);
    $stateProvider.state(mainState);
    $stateProvider.state(LandingPageState);
    $stateProvider.state(PortfolioState);
    $stateProvider.state(ArticleState);
    $stateProvider.state(FormState);
    $stateProvider.state(LoginState);
    $stateProvider.state(CalendarState);
    $stateProvider.state(TableState);
    $stateProvider.state(ItemsListState);
  });
