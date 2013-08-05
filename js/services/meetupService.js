angularjsOC.app.factory('meetupService', ['$http', function($http) {
    return {
        getUpcoming: function() {
            return $http.jsonp('https://api.meetup.com/2/events?&sign=true&group_id=918203&page=20&sign=true&text_format=plain&callback=JSON_CALLBACK&key=' + angularjsOC.keys.meetup);
        }
    }
}]);