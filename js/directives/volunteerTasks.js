(function () {
  angularjsOC.app.directive('volunteerTasks', ['trelloService', 'settings', function (trelloService, settings) {
    return {
      restrict: 'EA',
      replace: false,
      templateUrl: '/partials/volunteerTasks.html',
      link: function (scope, el, attrs) {
        scope.settings = settings;
        scope.ideas = trelloService.ideas();
        scope.todos = trelloService.todos();
        scope.doings = trelloService.doings();
      }
    }
  }]);
}());