(function () {
  angularjsOC.app.directive('volunteerTasks', ['trelloService', 'settings', function (trelloService, settings) {
    return {
      restrict: 'EA',
      replace: false,
      templateUrl: 'views/volunteerTasks.html',
      link: function (scope, el, attrs) {
        scope.settings = settings;
        trelloService.ideas().then(function(cards) {
            scope.ideas = cards
        });
        trelloService.todos().then(function(cards) {
            scope.todos = cards;
        });
        trelloService.doings().then(function(cards) {
            scope.doings = cards;
        });
      }
    }
  }]);
}());