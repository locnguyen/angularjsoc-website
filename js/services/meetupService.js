angularjsOC.app.factory('meetupService', ['$http', function($http) {
    // GROUP_ID = 9218222 for AngularJSOC. Use  918203 for dev

    var GROUP_ID = 918203,
        API_KEY = '5732f7612a68125a17145474123f';

    function url(str) {
      return str + '&group_id=' + GROUP_ID + '&key=' + API_KEY + '&callback=JSON_CALLBACK';
    }

    return {
        getUpcoming: function() {
            return $http.jsonp(url('https://api.meetup.com/2/events?&sign=true'
              + '&page=20&sign=true&text_format=plain'));
        },

        getMembers: function() {
            return $http.jsonp(url('https://api.meetup.com/2/members?joined=true'))
              .then(function(response) {
                return response.data;
              });
        },

        getGroupDetails: function() {
            return $http.jsonp(url('https://api.meetup.com/2/groups?'))
              .then(function(response) {
                return response.data.results[0];
              });
        }
    }
}]);