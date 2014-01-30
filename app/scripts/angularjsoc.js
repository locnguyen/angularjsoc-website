'use strict';

var angularjsOC = angularjsOC || {};

angularjsOC.app = angular.module('angularjsOC', ['angulartics', 'angulartics.google.analytics', 'ngRoute']);

angularjsOC.app.constant('settings', {
    contact: 'angularjsoc@gmail.com',
    googleApiKey: 'AIzaSyDKBBD3LJwwgWInHsE3zG7NK5-TkQ9u_ok',
    trello: {
        url: 'https://trello.com/b/R2epot1q/angularjs-oc',
        apiKey: 'efdb13875d22825e117d1c6518fa5739',
        ideaListId: '5218424dac7bc54327001565',
        todoListId: '51d89227f4deb8010b000aca',
        doingListId: '51d89227f4deb8010b000acb'
    },
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
});

angularjsOC.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/', { templateUrl: 'views/index.html' }).
      when('/getinvolved', { templateUrl: 'views/getinvolved.html' }).
      when('/about', { templateUrl: 'views/about.html' }).
      when('/presentations', { templateUrl: 'views/presentations.html' }).
      when('/contact', { templateUrl: 'views/contact.html' }).
      otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

angularjsOC.app
    .filter('removehtml', function () {
      return function (text) {
        return String(text).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').substring(0, 250) + '...';
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
          return String(text).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').substring(0, length - end.length) + end;
        }
      }
    })
    .filter('escape', function () {
      return function (text) {
        return encodeURIComponent(text);
      }
    });

angularjsOC.app.directive('foundation', [function () {
  return {
    link: function (scope, el) {
      $(document).foundation();
    }
  }
}]);