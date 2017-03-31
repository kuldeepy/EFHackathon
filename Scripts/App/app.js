//Define an angular module for our app
var hackDayApp = angular.module('hackDayApp', ['ngAnimate', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);
//Define Routing for the application
hackDayApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);