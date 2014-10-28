'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common.Authorization = 'Basic ' + window.btoa('jimmy:j');
    //$httpProvider.defaults.headers.common.Accept = 'application/hal+json';
    //$httpProvider.defaults.headers.common.Accept = 'application/hal+json';
    //$httpProvider.defaults.headers.common = {'Content-Type' : 'application/hal+json'};
    $httpProvider.defaults.headers.post = {'Content-Type' : 'application/hal+json'};


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
