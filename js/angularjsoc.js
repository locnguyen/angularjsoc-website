'use strict';

var angularjsOC = angularjsOC || {};

angularjsOC.app = angular.module('angularjsOC', ['filters']);

angularjsOC.app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: '/partials/index.html' }).
    when('/getinvolved', { templateUrl: '/partials/getinvolved.html' }).
    when('/about', { templateUrl: '/partials/about.html' }).
    when('/announcements', { templateUrl: '/partials/announcements.html' }).
    when('/presentations', { templateUrl: '/partials/presentations.html' }).
    when('/contact', { templateUrl: '/partials/contact.html' }).
    otherwise({ redirectTo: '/' });
}]);

angular.module('filters', []).
    filter('removehtml', function () {
        return function (text) {
                return String(text).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').substring(0,250)+'...';
    }
});

angular.module('filters', []).
    filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 250;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').substring(0, length-end.length) + end;
            }

        };
    });

angularjsOC.app.directive('foundation', [function() {
    return {
        link: function(scope, el) {
            $(document).foundation();
        }
    }
}]);