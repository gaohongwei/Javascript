===========Use directive
restrict: 'A', Attribute, Usage: <div dname></div> //default
restrict: 'E', Element,  Usage: <dname></dname>
restrict: 'C', Attribute, Usage: <div class='dname'></div>
restrict: 'M', Comment,// comments
===========Use scope
scope: false, default, use parent scope
scope: true,  // use a child scope that inherits from parent
scope: {},  // use a new isolated scope,a sandbox
######### isolated scope, read data from html dom
scope: { data: "@data" },
scope: { data: "=data" },
scope:'@', // Read a string attribute in the directive,
scope:'&', // Get function call expressions in the directive
scope:'=', // Define two way binding,expects an object  
######### update data in parent scope from bind/link function
      scope.$apply(function(){
        $scope.item.showAction = true;
      })  
######### event not fired,why? Different scope
1. Event defined in template
2. Directive created from template  
3. Event not fired
######### template, ng-template
<script type="text/ng-template" id="phone.html">
 Define template inline
 template:$templateCache.get('phone.html')
 It must live within the ng-app directive
 Best practice:
 keep all the script tags at the top of the app for organization purposes.
######### compile, link, controlller
run order: compile for all, controller, pre-link by order, post-link by reverse order
compile(tEle,tAttrs)
  modify source template;
  compile one time even for ng-repeat
  no scope
link(scope,iEle,iAttrs)
  work on every instance of template
  bind event, watch etc
controller:
  use parent controller by default
  can define its own controller
  can specify controller

######### compile, $compile, $eval
scope.$eval is a scope method which executes an expression on current scope and return the result.
$compile(templateString)(scope) will compile plain templateString and link it with `scope`.
$compile is a service

$compile, $parse,$timeout, $filter, $http,  $controller are service, 
so all should return function (see ‘https://docs.angularjs.org/api/ng/service/$parse’)
#############################################
app.directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,
    // default, use parent scope
    // scope: true,  // use a child scope that inherits from parent
    // scope: {},  // use a new isolated scope
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  }; 
});



