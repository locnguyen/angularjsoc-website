(function() {
  angularjsOC.app.directive('eventMap', ['geoService', 'settings', function(geoService, settings) {
    return {
      restrict: 'EA',
      scope: {
        event: '='
      },
      link: function(scope, el, attrs) {
        google.maps.visualRefresh = true;

        var map,
          address = [scope.event.venue.address_1, scope.event.venue.city, scope.event.venue.state].join(',');

        attrs.$observe('id', function(val) {
          var mapOptions = {
            center: new google.maps.LatLng(settings.location.lat, settings.location.lon),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          map = new google.maps.Map(document.getElementById(val), mapOptions);
        });

        geoService.geocodeAddress(address).then(function(loc) {
          var eventLocation = new google.maps.LatLng(loc.lat, loc.lon);
          map.setCenter(eventLocation);

          var locationMarker = new google.maps.Marker({
            position: eventLocation,
            title: scope.event.venue.name
          });

          locationMarker.setMap(map);
        });
      }
    }
  }]);
}());