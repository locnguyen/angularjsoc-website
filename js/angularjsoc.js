var angularjsOC = angular.module('angularjsOC', ['filters']);

angularjsOC.config(['$routeProvider', function($routeProvider) {
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