angularjsOC.app.controller('BaseController', ['$scope', '$location', 'meetupService', function($scope, $location, meetupService) {

  $scope.loadfoundation = function() {
    $(document).foundation();
  }

  $scope.currentPage = function() {
    return $location.path();
  }

  meetupService.getGroupDetails().then(function(details) {
    $scope.groupDetails = details;
    console.log(details);
  });

  // Not used anywhere right now. It's a big response so we should
  // consider querying for members attending the next scheduled meetup
  // if we want to display the data somewhere.
  //
  // meetupService.getMembers().then(function(members) {
  //    $scope.members = members;
  // });
}]);