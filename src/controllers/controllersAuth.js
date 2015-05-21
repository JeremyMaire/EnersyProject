'use strict';
 
angular.module('Authentification')
 
.controller('AuthController',
    ['$scope', '$location', 'AuthentificationService',
    function ($scope, $location, AuthentificationService) {  
        
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthentificationService.Login($scope.ssid, $scope.password, function(response) {
                if(response.success) {
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);