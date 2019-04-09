app/views/admin/partials/dashboard/page.html.haml
%div{ compile: 'root_widget_template' }
%div{:compile => "root_widget_template"}

<div compile="root_widget_template"></div>
<div compile="root_widget_template"></div>
<div compile="root_widget_template" class="ng-scope">

app/assets/javascripts/admin/plugins/compile.coffee
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
element.html( htmlString ),Set the HTML content of the element
element.contents(),Get the children of the element, including text and comment nodes.
