'use strict';

/* Controllers */

function UpcomingMeetups($scope, $http) {
  $http.jsonp('https://api.meetup.com/2/events?&sign=true&group_id=918203&page=20&sign=true&key=18224834563235331b1963378625522&text_format=plain&callback=JSON_CALLBACK').success(function(data) {
    $scope.events = data.results;
  });
}

