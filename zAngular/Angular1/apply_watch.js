$watch()
The $scope.watch() function creates a watch of some variable change. 
It takes 2 parameters 
A value function, or a function return a value
A listener function
The listener function may change the content of another variable, 
or set the content of an HTML element or something.

The $scope.$apply() function takes a function as parameter to execute,
It may change some variable
AngularJS calls $digest() internally after $scope.$apply() called,
so all data bindings are updated.

The $scope.$digest() function iterates through all the watches 
in the $scope object, and its child $scope objects (if it has any). 
When $digest() iterates over the watches, 
it calls the value function for each watch. 
If the value returned by the value function is different than the value 
it returned the last time it was called, 
the listener function for that watch is called.
