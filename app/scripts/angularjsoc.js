'use strict';

var angularjsOC = angularjsOC || {};

angularjsOC.app = angular.module('angularjsOC', ['angulartics', 'angulartics.google.analytics', 'ui.router']);

angularjsOC.app.constant('settings', {
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
});

angularjsOC.app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
      .state('root', {
          abstract: true,
          views: {
              'header': {
                  templateUrl: 'views/header.html'
              },
              'footer': {
                  templateUrl: 'views/footer.html'
              }
          }
      })
      .state('root.home', {
          url: '/',
          views: {
              'main@': { templateUrl: 'views/index.html' }
          }
      })
      .state('root.getinvolved', {
          url: '/getinvolved',
          views: {
              'main@': { templateUrl: 'views/getinvolved.html' }
          }
      })
      .state('root.about', {
          url: '/about',
          views: {
             'main@': { templateUrl: 'views/about.html' }
          }
      })
      .state('root.presentations', {
          url: '/presentations',
      views: {
        'main@': { templateUrl: 'views/presentations.html' }
      }
      })
      .state('root.contact', {
          url: '/contact',
          views: {
            'main@': { templateUrl: 'views/contact.html' }
          }
      })
      .state('root.sponsorship', {
          url: '/sponsorship',
          views: {
            'main@': { templateUrl: 'views/sponsorship.html' }
          }
      })
      .state('root.policies', {
          url: '/policies',
          views: {
            'main@': { templateUrl: 'views/policies.html' }
          }
      });

      $urlRouterProvider.otherwise('/');
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
