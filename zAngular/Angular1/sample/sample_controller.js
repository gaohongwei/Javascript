<html >
<body>
  <script src='angular.js'></script>
  <script>
    var app = angular.module("app", []);
    app.factory('Data', function () {
      return { message: "I'm data from a service" };
    });

    app.controller('Ctrl01',function($scope){

    });   
    app.controller('Ctrl02',function($scope){

    });  

    app.controller('Ctrl03',function($scope, Data) {
      $scope.data = Data;
    });
    app.controller('Ctrl04',function($scope, Data) {
      $scope.data = Data;
    });
  </script>
<div ng-app="app"> 
<h1>Share the data model between the two controllers by a parent scope</h1>
  <input type="text" ng-model="data.message">:ng-model="data.message" in root scope
  <h1>{{ data.message }}:data.message</h1>

  <div ng-controller="Ctrl01">
    <!--Need data. for ng-model-->
    <input type="text" ng-model="data.message">:ng-model="data.message" in controller
    <h1>{{ data.message }}:data.message in controller</h1>
      
    <p>The ng-model can be used as css class name</p>
    <div class="{{data.message}}">
      <p>Wrap me in a foundation component.</p>
    </div>
  </div>

  <div ng-controller="Ctrl02">
    <input type="text" ng-model="data.message">
    <h1>{{ data.message }}</h1>
  </div>
The above three all use data.message</br>
<p>In this setup, all three instances of data.message are bound to each other through the first data.message, which is in the scope of the entire application.</p>
<p>With this setup, data.message is defined outside of either controller, scoped to the entire ng-app. The bindings within each of the controller divs both point to that ‘parent’ model. Because of this, all 3 instances of the data.message input are bound to each other because of the first instance, which is globally scoped in the application.</p>

<h1>Not share a parent scope</h1>

  <input type="text" ng-model="message">
  <h1>{{ message }}</h1>

  <div ng-controller="Ctrl01">
    <input type="text" ng-model="message">
    <h1>{{ message }}</h1>
  </div>

  <div ng-controller="Ctrl02">
    <input type="text" ng-model="message">
    <h1>{{ message }}</h1>
  </div>
The above three all use message</br>
<p>Now, each new ng-model of message is creating a new instance of message, and so each model will be an unbound instance.So it breaks the scope inheritance that was binding all the data.message instances. </p>
<p> Why are they all the same?</p>

<h1>Share the data model between the two controllers </h1>
    Inject Data service can be in controllers</br>
    app.controller('Ctrl03',function($scope, Data) {</br>
      $scope.data = Data;</br>
    });</br>
    app.controller('Ctrl04',function($scope, Data) {</br>
      $scope.data = Data;</br>
    });</br>
</div><!--div ng-app -->

 <h1>Define a method with the message parameter</h1>
function SecondCtrl($scope, Data) {</br>
  $scope.data = Data;</br>

  $scope.reversedMessage = function(message) {</br>
    return message.split("").reverse().join("");</br>
  };</br>
}</br>


</body>  
</html>
