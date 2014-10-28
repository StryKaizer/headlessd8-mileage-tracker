'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('MainCtrl', function ($scope, $http, Entry, Page) {

        $scope.entryData = {
            'distance': 30,
            startLocation: 'Vorselaar',
            endLocation: 'Geel',
            description: 'Uitvoering werken Webtrack',
            retour: true
        };

        $('.input-daterange').datepicker({
            format: 'yyyy-mm-dd',
            weekStart: 1,
            keyboardNavigation: false,
            todayHighlight: true
        });

        //$http.get('http://headless.dev/locations/').then(function (response) {
        //    var data = response.data;
        //    $scope.locations = data;
        //    $scope.startLocation = $scope.locations[0];
        //    $scope.endLocation = $scope.locations[1];
        //});

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
                    entry._links = {type: {href: 'http://headless.dev/rest/type/node/entry'}};
                    entry.title = [{'value': $scope.entryData.description}];
                    entry.field_date = [{value: startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()}];
                    entry.field_from = [{value: $scope.entryData.startLocation}];
                    entry.field_to = [{value: $scope.entryData.endLocation}];
                    entry.field_distance = [{value: $scope.entryData.distance}];
                    $scope.entries.push(entry);

                    Entry.save(entry);
                    if($scope.entryData.retour){
                        var retour = angular.copy(entry);
                        retour.field_from = [{value: $scope.entryData.endLocation}];
                        retour.field_to = [{value: $scope.entryData.startLocation}];
                        Entry.save(retour);
                        $scope.entries.push(retour);
                    }

                    var nextDate = startDate.setDate(startDate.getDate() + 1);
                    startDate = new Date(nextDate);
                }
            }


        };

        $scope.sortEntries = function(entry) {
            var date = new Date(entry.field_date[0].value);
            return date;
        };

    });
