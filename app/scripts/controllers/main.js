'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('MainCtrl', function ($scope, $http, Entry) {


        $('.input-daterange').datepicker({
            format: "yyyy-mm-dd",
            weekStart: 1,
            keyboardNavigation: false,
            todayHighlight: true
        });

        var entry = new Entry();
        entry._links = {"type": {"href": 'http://headless.dev/rest/type/node/entry'}};
        entry.title = [
            {'value': 'test'}
        ];
        Entry.save(entry);


        $http.get('http://headless.dev/locations/').then(function (response) {
            var data = response.data;
            $scope.locations = data;
            $scope.startLocation = $scope.locations[0];
            $scope.endLocation = $scope.locations[1];
        });

        $http.get('http://headless.dev/entries/latest/').then(function (response) {
            $scope.entries = response.data;
        });

        $scope.submitEntries = function () {

            var start = $('input[name=start]').val();
            var end = $('input[name=end]').val();

            if (start && end) {
                var startDate = new Date(start);
                var endDate = new Date(end);

                while (startDate <= endDate) {

                    var entry = new Entry();
                    entry.title = [
                        {'value': 'test'}
                    ];
                    Entry.save(entry);


                    console.log(startDate);

                    var nextDate = startDate.setDate(startDate.getDate() + 1);
                    startDate = new Date(nextDate);
                }
            }


        };

    });
