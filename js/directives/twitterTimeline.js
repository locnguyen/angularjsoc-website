(function() {
  angularjsOC.app.directive('twitterTimeline', [function() {
    return {
      restrict: 'EA',
      replace: false,
      template: '<a class="twitter-timeline" href="https://twitter.com/AngularJSOC" data-widget-id="371510091679154176" width="90%">Tweets by @AngularJSOC</a>',
      link: function(scope, el, attrs) {
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
      }
    }
  }]);
}());