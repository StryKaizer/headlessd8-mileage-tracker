'use strict';

/**
 * @ngdoc service
 * @name frontApp.Page
 * @description
 * # Page
 * Factory in the frontApp.
 */
angular.module('frontApp')
    .factory('Page', function ($resource) {
        return $resource('http://mileagetracker.dev/entity/node');
  });
