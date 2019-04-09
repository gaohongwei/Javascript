===========Use directive
restrict: 'A', Attribute, Usage: <div dname></div> //default
restrict: 'E', Element,  Usage: <dname></dname>
restrict: 'C', Attribute, Usage: <div class='dname'></div>
restrict: 'M', Comment,// comments

<html >
<body>
<script src='angular.js'></script>
<script>
    var app = angular.module("superhero", [])

    app.directive("superman1", function() {
      return {
        restrict: "E",
        template: "<div> superman1 </div>"
      }
    }); 
    app.directive("superman2", function() {
      return {
        restrict: "A",//default
        template: "<div> superman2 </div>"
      }
    });   
    app.directive("superman3", function() {
      return {
        restrict: "C",
        template: "<div> superman3 </div>"
      }
    }); 
    app.directive("superman4", function() {
      return {
        restrict: "M", // comments
        template: "<div> superman4 </div>"
      }
    }); 
</script>
<div ng-app="superhero">
  <superman1></superman1>
  <div superman2></div>  
  <div class="superman3"></div>  
  <div superman4></div>      
  </div>
</body>
</html>
