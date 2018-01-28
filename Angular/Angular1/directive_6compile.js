=========== $complie ===========
# $compile is a service, and can be injected
# $compile(templateString)(scope) 
# called in link function
# compile plain templateString 
# link it with `scope`
# create the dom according to the html string
# good for small amount of data
############## template ##############
# template:'<div>Initial Version</div>', defined as constant string, 
# $templateCache.get('tnode'), be got from ng-template by id
# Its content can contain variables
############## function($compile) ##############
# $compile is injected as a service
# Use variable(htmlString) and function defined in parent controller
# Read variable(htmlString) from dom attribute
# Use function defined in parent or its own controller 
    var app = angular.module("app",[]);
    app.controller('MainController',function($scope) {
      $scope.htmlString = '<div><input type="button" ng-click="clickMe()" value="click me!"/> </div>'; 
      $scope.root_widget_template = '<div><input type="button" ng-click="clickMe()" value="root_widget_template!"/> </div>'; 
      $scope.clickMe = function(){
        alert("hi from top controller");
      };           
    });
    app.directive("compile", function($compile) {
      return {
        restrict:'AE',
        template:'<div>Initial Version</div>', //for debug only
        scope: {message: "="}, // Read variable(message) from dom attribute 
        replace: true,        
        //controller:'MainController', //Main controller
        controller: function($scope) {
          $scope.clickMe = function(){
            alert("hi from controller of directive");
          };
        } 
        link:function(scope,iEle,iAttrs)
        {
          // htmlString can contain variable from  controller or from dom attribute
          var htmlString=scope.root_widget_template;
          //  htmlString=scope.message;         
          var compiled=$compile(htmlString); // return a function
          var dom=compiled(scope); // call the function 
          iEle.replaceWith(dom);  // Manipulate DOM
        }
      }
    });

####### sample from f9
app/views/admin/partials/dashboard/page.html.haml
%div{ compile: 'root_widget_template' }
%div{:compile => "root_widget_template"}

<div compile="root_widget_template"></div>
<div compile="root_widget_template"></div>
<div compile="root_widget_template" class="ng-scope">

window.app.directive "compile", ($compile) -> (scope, element, attrs) ->
  compile_scope = (scope) -> scope.$eval(attrs.compile)
  scope.$watch(
    compile_scope,
    (value) ->
      element.html(value)
      $compile(element.contents())(scope)
  )

window.app.directive("compile", function($compile) {
  return function(scope, element, attrs) {
    var compile_scope;
    compile_scope = function(scope) {
      return scope.$eval(attrs.compile);
    };
    return scope.$watch(compile_scope, function(value) {
      element.html(value);
      return $compile(element.contents())(scope);
    });
  };
});

scope.$eval is a scope method which executes an expression on current scope and return the result.
$compile(templateString)(scope) will compile plain templateString and link it with `scope`.
