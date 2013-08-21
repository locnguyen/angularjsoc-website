(function() {
    angularjsOC.app.directive('volunteerTasks', ['trelloService', function(trelloService) {
        return {
            restrict: 'EA',
            replace: false,
            templateUrl: '/partials/volunteerTasks.html',
            link: function(scope, el, attrs) {
                scope.tasks = trelloService.todos();
            }
        }
    }]);
}());