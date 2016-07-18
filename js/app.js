(function() {
    "use strict";
    var XxkModule = angular.module("XxkModule", ['ngRoute']);
    XxkModule.config(function($routeProvider, $locationProvider) {
        $locationProvider
            .html5Mode(false)
            .hashPrefix("!");
        $routeProvider
            .when('/', {
                templateUrl: 'tpl1/index.html',
                controller: function($scope) {
                    console.log($scope);
                }
            })
            .when('/courseCenter', {
                templateUrl: 'tpl1/courseCenter.html',
                resolve: {
                    data: function() {
                        return "testValue";
                    }
                },
                controller: function(data) {
                    console.log(data);
                }
            })
            .when('/platform', {
                templateUrl: 'tpl1/platform.html'
            })
            .when('/teacherStyle', {
                templateUrl: 'tpl1/teacherStyle.html'
            })
            .when('/communication', {
                templateUrl: 'tpl1/communication.html'
            })
            .when('/helpCenter', {
                templateUrl: 'tpl1/helpCenter.html'
            })
            .when('/onlineAnswer', {
                templateUrl: 'tpl1/onlineAnswer.html'
            })
            .otherwise({
                redirectTo: function(route, path, search) {
                    console.log(route);
                    console.log("path:" + path);
                    console.log(search);
                    return "/";
                }
            });
    });
}());
