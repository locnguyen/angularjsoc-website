'use strict';

var angularjsOC = angularjsOC || {};

angularjsOC.app = angular.module('angularjsOC', ['filters']);

angularjsOC.app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: '/js/partials/index.html' }).
    when('/getinvolved', { templateUrl: '/js/partials/getinvolved.html' }).
    when('/about', { templateUrl: '/js/partials/about.html' }).
    when('/announcements', { templateUrl: '/js/partials/announcements.html' }).
    when('/presentations', { templateUrl: '/js/partials/presentations.html' }).
    when('/contact', { templateUrl: '/js/partials/contact.html' }).
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