'use strict';

var angularjsOC = angularjsOC || {};

angularjsOC.settings = {
  contact: 'angularjsoc@gmail.com',
  googleApiKey: 'AIzaSyDKBBD3LJwwgWInHsE3zG7NK5-TkQ9u_ok',
  location: {
    lat: '33.7400016784668',
    lon: '-117.81999969482422'
  },
  social: {
    fb: 'https://www.facebook.com/groups/146772135530385',
    google: 'https://plus.google.com/u/0/103947436301596064094',
    twitter: 'https://twitter.com/AngularJSOC',
    youtube: '',
    meetup: 'http://www.meetup.com/AngularJS-OC'
  }
};

angularjsOC.app = angular.module('angularjsOC', ['ngRoute']);

angularjsOC.app.value('settings', angularjsOC.settings);

angularjsOC.app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', { templateUrl: '/partials/index.html' }).
    when('/getinvolved', { templateUrl: '/partials/getinvolved.html' }).
    when('/about', { templateUrl: '/partials/about.html' }).
    when('/presentations', { templateUrl: '/partials/presentations.html' }).
    when('/contact', { templateUrl: '/partials/contact.html' }).
    otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);

angularjsOC.app
    .filter('removehtml', function () {
        return function (text) {
            return String(text).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').substring(0,250)+'...';
        }
    })
    .filter('truncate', function () {
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

        }
    });

angularjsOC.app.directive('foundation', [function() {
    return {
        link: function(scope, el) {
            $(document).foundation();
        }
    }
}]);