  app.directive('strr', function () {
     return { 
       restrict: 'E',      
       scope: { data : '@str'},
       template:"<div popover='{{data}}' popover-trigger='mouseenter'>" +
        "{{data|limitTo: 3}}{{data.length > 3 ? '...' : ''}}</div>"
     }
   });  

app.directive('shorten', function () {
  return {
    restrict: 'E',
    scope: {
        thelength: '=',
        thestring: '='
    },
    template: "<div class='handCursor' ng-show='isLong()' tooltip='{{ thestring }}'>{{ short() }}</div>" +
      "<div ng-hide='isLong()'>{{ thestring }}</div>",       
    link: function postLink(scope, iElement, iAttrs) {
      scope.isLong = function () {
        return scope.thestring.length > scope.thelength
      }
      scope.short = function () {
        if (scope.thestring.length > scope.thelength) {
          return scope.thestring.substring(0, scope.thelength) + '...'
        }
        return scope.thestring;
      }
    }
  }
}); 
