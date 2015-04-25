'use strict';

/**
 * @ngdoc function
 * @name publicTransitToApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicTransitToApp
 */
angular.module('publicTransitToApp')
    .controller('MainCtrl', function($scope, $sce) {
        $scope.showDestinations = function() {
            var endAddresses = [
                '33 rue du Mail, 75002, Paris',
                '30, Avenue des Fruitiers, 93210, St-Denis',
                'Terrasse de l\'Iris, Courbevoie',
                '40 boulevard de Port-Royal, Paris',
                '33 rue du Progrès, Montreuil',
                '5 rue Henri Barbusse, Villejuif',
                '168, avenue Daumesnil, 75012, Paris',
                '156 boulevard Haussmann, Paris',
                '22 rue de la Sablière, Yerres',
                '5 rue Léon Schwartzenberg, Paris',
                '11 rue Hénard, Paris',
                '11 rue d\'Alesia, Paris'
            ];
            $scope.allEnds = [];
            for (var i = 0; i < endAddresses.length; i++) {
                var endAddress = endAddresses[i];
                var url = createUrl($scope.start, endAddress);
                $scope.allEnds.push({
                    url: url,
                    address: endAddress
                });
            }
        };

        $scope.selected = function(url) {
            return url === $scope.selectedUrl;
        };

        $scope.showDirections = function(url) {
            $scope.selectedUrl = url;
        };

        $scope.trustedUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        }

        function createUrl(start, end) {
            var url = 'http://www.ratp.fr/itineraires/fr/ratp/resultat-detaille/start/' + start + '/end/' + end + '/route_type/plus_rapide#SeDeplacer';
            return url;
        }
    });
