<!DOCTYPE html>
<html lang="en">
  <head>
    <title>AngularJS Routing example</title>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular-resource.min.js"></script>    
  </head>
 
  <body ng-app="sampleApp">
    <div class="container">
        <div class="row">
        <div class="col-md-3">
            <ul class="nav">
                <li><a href="#addOrder"> Add New Order </a></li>
                <li><a href="#showOrders"> Show Order </a></li>
                <li><a href="#showOrder/1"> Show Order 1</a></li> 
                <li><a href="#showOrder/2"> Show Order 2</a></li>   
                <li><a href="#ExtraData"> Extra Data</a></li>   
                <li><a href="#TryTemplate"> Template</a></li>                                                                
            </ul>
        </div>
        <div class="col-md-9">
            <div ng-view></div>
        </div>
        </div>
    </div>
    <script type="text/ng-template" id="try_template.html">
        <h2> We try template by ng-template</h2>
        {{message}}
    </script>    
    <script>
        var sampleApp = angular.module('sampleApp', []);
          
        sampleApp.config(['$routeProvider',
          function($routeProvider) {
            $routeProvider.
              when('/addOrder', {
                //templateUrl: 'templates/add-order.html',
                template: "<h2>Add Order</h2>{{ message }}",
                controller: 'AddOrderController'
              }).
              when('/showOrders', {
                //templateUrl: 'templates/show_orders.html',
                template: "<h2>Show Orders</h2>{{ message }}",
                controller: 'ShowOrdersController'
              }).    

              when('/ExtraData', {
                template: "<h2>Show Orders</h2>{{ foo }}",
                controller: 'CommonController',
                foodata: 'showorders'
              }).                          
             when('/showOrder/:orderId', {
                  template: "<h2>Show Order {{order_id}} detail </h2>{{ message }}",
                  controller: 'ShowOrderController'
              }).
             when('/TryTemplate', {
                  templateUrl: "try_template.html",
                  controller: 'ShowOrdersController'
              }).             
              otherwise({
                redirectTo: '/addOrder'
              });
          }]);
        sampleApp.controller('CommonController', function($scope, $route) {
            //access the foodata property using $route.current
            $scope.foo = $route.current.foodata;            
        });


        sampleApp.controller('AddOrderController', function($scope) {
         
            $scope.message = 'This is Add new order screen';
         
        });
         
         
        sampleApp.controller('ShowOrdersController', function($scope) {
         
            $scope.message = 'This is Show orders screen';
         
        });
        sampleApp.controller('ShowOrderController', function($scope,$routeParams) {
            var oid=$routeParams.orderId;
            $scope.order_id = $routeParams.orderId;         
            $scope.message = "This is Show order detail for " + oid;           
         
        });        
    </script> 
  </body>
</html>
