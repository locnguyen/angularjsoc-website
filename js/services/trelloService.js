(function() {
    angularjsOC.app.factory('trelloService', ['$http', '$q', 'settings', function($http, $q, settings) {
        var TODO_LIST_ID = '51d89227f4deb8010b000aca';

        function cardUrl(listId) {
            return 'https://trello.com/1/lists/' + listId + '/cards?key=' + settings.trelloApiKey;
        }

        return {
            lists: function(boardId) {
                var url = 'https://trello.com/1/boards/' + boardId + '/lists?key=' + settings.trelloApiKey;
                return $http.get(url).then(function(response) {
                    return response.data;
                });
            },

            cards: function(listIds) {

                if (!_.isArray(listIds)) listIds = [listIds];

                var requests = [];
                _.each(listIds, function(id) {
                    requests.push($http.get(cardUrl(id)));
                });

                return $q.all(requests).then(function(response) {
                    var cards = _.flatten(_.pluck(response, 'data'));
                    return cards;
                });
            },

            todos: function() {
                return this.cards(TODO_LIST_ID);
            }
        }
    }]);
}());