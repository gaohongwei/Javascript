=========== Compile/Link Syntax ===========    
compile function()
  takes a html string as source template
  modify on the template
  run one time only
  return a link function
link function()
  Create an instance from modified template
  Work on current element such as 
  append,replace,bind
=========== Compile/Link Complete Syntax ===========
app.directive('dname',function()
{ 
  var newElement=angular.element('<div></div>');
  var link_function=function(scope,elem,attrs){
    elem.append(newElement);
  };
  var compile_function=function(elem,attrs){
    ele.modify();
    return link_function;
  }; 
  return {
    restrict: 'A', // default
    template: '<div></div>',
    templateUrl: 'a.html',  
    scope:{},'@','&','='
    link: link_function, 
    compile: compile_function
  }
});  

=========== Link without compile =========== 
app.directive("enter", function(){
 return function(scope,element,attrs){}
});   
app.directive("enter", function(){
 return {
  restrict:'A', // default
  link: function(scope,element,attrs){}
});
=========== Link with compile =========== 
app.directive("dirlink", function () {
  var link=function(scope,ele,attr){
    ele.append('abc2');
    console.log('post dirlink');              
  }      
  return {
    restrict: "E",
    template: "<div>Page Two</div>",
    scope:'=',
    compile: function(tEle,tAttr){
      return link;          
    }
  };
}); 
=========== pre/post link function =========== 
app.directive("dirlink2", function () {
  var prefun=function(scope,ele,attr){
    console.log('pre');  
  }
  var postfun=function(scope,ele,attr){
    ele.append('abc1');
    console.log('post'); 
  }
  return {
    restrict: "E",
    template: "<div>Page One</div>",
    scope:'=',
    compile: function(tEle,tAttr){                   
      return {
        pre:prefun,
        post:postfun
      }
    }
  };
}); 

=========== work on dom in bind function ===========
  var link_function=function(scope,elem,attrs){
    elem.bind('mouseenter',function(){
      var span=elem.find('span').removeClass('hide'); 
      var tpl=$templateCache.get('ddata');
      var eval=scope.$eval(tpl);  // error , why?    
      var dom=$compile(eval)(scope);
      elem.append(dom);
    });
    elem.find('span').removeClass('hide');  //addClass   
  }; 


=========== link/behavior sample ===========   
app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind('mouseover',function(){
      //scope.clog();
      //scope.$apply('clog()');
      scope.$apply(attrs.enter);
    });
    element.bind('mouseover',scope.clog);
  }
}); 

