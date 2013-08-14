(function() {
  /**
   * Based on guidance provided in https://github.com/zurb/foundation/issues/1358#issuecomment-17969008
   */
  angularjsOC.app.directive('matchHeight', [function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        attrs.$observe('event-id', function() {
          var childrenCols =  el.find('[height-watch]'),
            childHeights = _.map(childrenCols, function(c) {
              return $(c).height();
            }),
            tallestChild = Math.max.apply(Math, childHeights);

          childrenCols.css('min-height', tallestChild);
          childrenCols.css('height', tallestChild);
        });
      }
    }
  }]);
}());