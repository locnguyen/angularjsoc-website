angularjsOC.app.controller('BaseController', ['$scope', '$location', 'meetupService', 'settings', function($scope, $location, meetupService, settings) {

  $scope.social = settings.social;

  $scope.loadfoundation = function() {
    $(document).foundation();
  }


  meetupService.getGroupDetails().then(function(details) {
    $scope.groupDetails = details;
  });

  // Not used anywhere right now. It's a big response so we should
  // consider querying for members attending the next scheduled meetup
  // if we want to display the data somewhere.
  //
  // meetupService.getMembers().then(function(members) {
  //    $scope.members = members;
  // });
}]);
