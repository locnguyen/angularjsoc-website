angularjsOC.app.directive('upcomingMeetups', ['meetupService', function(meetupService) {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: '/js/partials/upcomingMeetups.html',
        link: function(scope, el) {
            meetupService.getUpcoming().success(function(data) {
                scope.events = data.results;
            });
        }
    }
}]);