'use strict';
 
angular.module('Authentification')
 
.factory('AuthentificationService',
    ['$timeout',  
    function ($timeout) {  
        var service = {};

        service.Login = function (ssid, password, callback) {

            $timeout(function(){
                var response = { success: ssid === 'enersy' && password === 'enersy123' };
                if(!response.success) {
                    response.message = 'SSID ou MOT DE PASSE incorrect';
                }
                callback(response);
            }, 1000);

        };
 
       return service;
    }])
