(function() {
  angularjsOC.app.factory('geoService', ['$q', '$rootScope', function($q, $rootScope) {
    var geocoder = new google.maps.Geocoder();

    return {
      geocodeAddress: function(address) {
        var deferred = $q.defer();

        geocoder.geocode({ address: address }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            var coords = { lat: location.lat(), lon: location.lng() };
            deferred.resolve(coords);
            $rootScope.$apply();
          } else {
            deferred.reject('Geocoding failed - ' + status);
          }
        });

        return deferred.promise;
      }
    }
  }]);
}());
