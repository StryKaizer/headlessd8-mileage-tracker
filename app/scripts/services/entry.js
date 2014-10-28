'use strict';

/**
 * @ngdoc service
 * @name frontApp.Entry
 * @description
 * # Entry
 * Factory in the frontApp.
 */
angular.module('frontApp')
  .factory('Entry', function ($resource) {
        var entry = $resource('http://headless.dev/entity/node');
        entry._links = {
            "type":{"href":"http://headless.dev/rest/type/node/entry"}
        };
        return entry;
  });
