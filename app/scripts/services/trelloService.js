(function () {
  angularjsOC.app.factory('trelloService', ['$http', '$q', 'settings', function ($http, $q, settings) {
    function cardUrl(listId) {
      return 'https://trello.com/1/lists/' + listId + '/cards?key=' + settings.trello.apiKey;
    }

    return {
      lists: function (boardId) {
        var url = 'https://trello.com/1/boards/' + boardId + '/lists?key=' + settings.trello.apiKey;
        return $http.get(url).then(function (response) {
          return response.data;
        });
      },

      cards: function (listIds) {
        if (!_.isArray(listIds)) listIds = [listIds];

        var requests = [];
        _.each(listIds, function (id) {
          requests.push($http.get(cardUrl(id)));
        });

        return $q.all(requests).then(function (response) {
          var cards = _.flatten(_.pluck(response, 'data'));
          return cards;
        });
      },

      ideas: function() {
        return this.cards(settings.trello.ideaListId);
      },

      todos: function () {
        return this.cards(settings.trello.todoListId);
      },

      doings: function () {
        return this.cards(settings.trello.doingListId);
      }
    }
  }]);
}());