<html >
<body>
<script src='angular.js'></script>
<script>
    var app = angular.module("app", []);
    // No dependence injection

    // Define a data service    
    app.factory('Data', function () {
      return { message: "I'm data from a service" };
    });
    // Define a filter
    // Return a function
    app.filter('filter1', function () {
      return function(text){
        return text.split('').reverse().join('');
      }
    }); 
    // Inject services into a filter
    app.filter('filter2', function (Data) {
      return function(text){
        return text.split('').reverse().join('') + Data.message;
      }
    });     
    // Define a controller
    // Inject a data service     
    app.controller('Ctrl01',function($scope, Data) {
      $scope.data = Data;
      // Define a method inside controller
      $scope.rev=function(message){
        return message.split('').reverse().join('');
      };
    });
</script>
<div ng-app="app"> 
  <div ng-controller="Ctrl01">
    <input type="text" ng-model="data.message"></br>
    original:{{ data.message }}</br>
    {{ rev(data.message) }}</br>  
    {{ data.message|filter2 }}</br> 

    <h1>The search by a single field, https://thinkster.io/egghead/ngfilter/<h1>
    <input type="text" ng-model="search.name">
    <table>
      <tr ng-repeat="actor in avengers.cast | filter:search">
        <td>{{ actor.name }}</td>
        <td>{{ actor.character }}</td>
      </tr>
    </table>
    <h1>A general search against all fields<h1>
    <input type="text" ng-model="search.$">  
    <table>
      <tr ng-repeat="actor in avengers cast | filter:search | orderBy:'name'  | limitTo: 5 ">
        <td>{{ actor.name }}</td>
        <td>{{ actor.character }}</td>
      </tr>
    </table>    

  </div>
</div>
</body>  
</html>
