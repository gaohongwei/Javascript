Directive uses parent scope by default.
It will create new scope with scope: {...},
=========== isolated scope, read data from html dom
scope: false, default, use parent scope
scope: true,  // use a child scope that inherits from parent
scope: {},  // use a new isolated scope,a sandbox

scope: { data: "@data" },
scope: { data: "=data" },
scope:'@', // Read a string attribute in the directive,
scope:'&', // Get function call expressions in the directive
scope:'=', // Define two way binding,expects an object
=========== update data in parent scope from bind/link function
      scope.$apply(function(){
        $scope.item.showAction = true;
      })  
=========== Simple: uses parent scope
app.directive("kid1", function() {
  return {
    restrict: "E",
    template: '<input type="text" ng-model="chore"> {{chore}}'
  };
});
=========== Simple: new scope
app.directive("kid2", function() {
  return {
    restrict: "E",
    scope: {},
    template: '<input type="text" ng-model="chore"> {{chore}}'
  };
});
=========== @,Read from attributes  ===========
<kid3 done="logChore(xx)"></kid3>
app.directive("kid3", function() {
  return {
    restrict: "E",
    scope: {done: "&"},
    template: '<input type="text" ng-model="chore"> {{chore}}' +
      '<div class="button" ng-click="done({xx: chore})">Done</div>'
  };
});

Connect logChore and done, done: "&"
done({xx: chore})
xx is the variable name in the view
chore is the value, defined in the ng-model
done is assigned to the atrribute of done in div

The {chore:chore} syntax maps the chore from the model in the <input> to 
to the logChore function when we said 'done="logChore(chore)"' (in the kid directive)

<div drink flavor="strawberry"></div>
app.directive("drink", function () {
  return {
    scope: {},
    template: '<div>{{ flavor }}</div>',
    link: function (scope, element, attrs) {
      scope.flavor = attrs.flavor;
    }
  };
});

<clock timezone="MST"></clock>
app.directive("clock", function () {
  return {
    restrict: 'E',
    scope: {tz: "@timezone"},
    template: "<div>12:00pm {{tz}}</div>"
  };
});  

<panel title="I'm a title">
  <clock timezone="PST"></clock>
</panel>
app.directive("panel", function () {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@title"
    },
    template: "<div style='border: 3px solid #000000'>" +
              "<div class='alert-box'>{{title}}</div>" +
              "<div ng-transclude></div></div>"
  };
});

<list-actions actions="actions"></list-actions>
app.directive('listActions', function ($compile) {
    return {
        restrict: "E",
        replace: true,
        template: '<ul></ul>',
        scope: {actions: '='},
        link: function (scope, iElement, iAttrs) {
            scope.$watch('actions', function (neww, old,scope) {
                var _actions = scope.actions;
                for (var i = 0; i < _actions.length; i++) {
                   //iElement.append('<li>'+ _actions[i].form_layout + '</li>');
                    //$compile(iElement.contents())(scope)
                    iElement.append($compile('<li>' + _actions[i].form_layout + '</li>')(scope));
                    console.log(_actions);
                }
            })
        }
    }
});
