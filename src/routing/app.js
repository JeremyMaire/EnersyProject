'use strict';

angular.module('Authentification', []);
angular.module('Accueil', []);
angular.module('TestDeCodageIonic', [
    'Authentification',
    'Accueil',
    'ngRoute'
])
 
.config(['$routeProvider',
     function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'AuthController',
            templateUrl: 'src/views/viewsAuth.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: 'AccueilController',
            templateUrl: 'src/views/viewsHome.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$location', 
    function ($location) { 
        if ($location.path() !== '/login') {
                $location.path('/login');
            }
       
    }]);