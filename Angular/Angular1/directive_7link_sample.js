=========== Bind event for ele, or parents ===========
app.directive('showonhoverparent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.show();
                //scope.show=true;
                console.log('mouseenter');
            });
            element.parent().bind('mouseleave', function() {
                 element.hide();
                //scope.show=false;                 
                console.log('mouseleave');
            });
       }
   };
});


<div enter="deleteTweets()">Roll over to load more tweets</div> 
app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      //scope.loadMoreTweets();
      //scope.$apply("loadMoreTweets()");
      scope.$apply(attrs.enter2);
    })
  }
}); 

=========== change behavior/css in link function =========== 
link: function(scope, elem, attrs) {
  elem.bind('click', function() {
    elem.css('background-color','white');        
  });
  elem.bind('mouseover', function() {
    elem.css('cursor', 'pointer');
  });
}

app.directive("enter", function(){
  return function (scope, element, attrs) {
    element.bind("mouseenter", function(){
      element.addClass("panel");  
      element.addClass(attrs.enter); 
    })
  }
});
app.directive("leave", function(){
  return function (scope, element, attrs) {
    element.bind("mouseleave", function(){
      element.removeClass("panel");  
      element.removeClass(attrs.enter);                         
    })
  }
});

element.bind("mouseenter", function(){})
element.bind("mouseenter", scope.ff01）;
element.bind("mouseenter", scope.ff01());// xxxx

//Directive that returns an element which adds buttons on click which show an alert on click
myApp.directive("addbuttonsbutton", function(){
  return {
    restrict: "E",
    template: "<button addbuttons>Click to add buttons</button>"
  }
});

//Directive for adding buttons on click that show an alert on click
myApp.directive("addbuttons", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      scope.count++;
      angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
    });
  };
});

//Directive for showing an alert on click
myApp.directive("alert", function(){
  return function(scope, element, attrs){
    element.bind("click", function(){
      console.log(attrs);
      alert("This is alert #"+attrs.alert);
    });
  };
});

######### Mouse enter/leave
<div enter leave> Test add/remove class by hard code</div>
<div enter="panel" leave>Test add/remove class by attrs</div>
// The link function define behavior
app.directive("enter", function(){
 return function (scope, element, attrs) {
      element.bind("mouseenter", function(){
        element.addClass("panel");  
        element.addClass(attrs.enter); 
        console.log("attrs="+attrs.enter);                      
        console.log("I'm inside of you!");
      })
    }
});
// The link function define behavior
app.directive("leave", function(){
 return function (scope, element, attrs) {
      element.bind("mouseleave", function(){
        element.removeClass("panel");  
        element.removeClass(attrs.enter);  
        console.log("attrs="+attrs.enter); 
        console.log("I left you!");                                            
      })
    }
});

app.directive("show", function(){
  var linkf=   function (scope, element, attrs) {    
    element.bind("mouseenter", function(){
      element.show();  
      console.log("show");                                     
    });     
  };
 return {
  retrict:'A',
  link:linkf
 }     
});
app.directive("hide", function(){
  var linkf=   function (scope, element, attrs) {    
    element.bind("mouseleave", function(){
      element.hide();  
      console.log("hide");                                     
    });     
  };
 return {
  retrict:'A',
  link:linkf
 }
});
