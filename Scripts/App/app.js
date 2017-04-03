//Define an angular module for our app
var hackDayApp = angular.module('hackDayApp', ['ngAnimate', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);
//Define Routing for the application
hackDayApp.config(['$routeProvider', '$locationProvider',
function ($routeProvider,$locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);