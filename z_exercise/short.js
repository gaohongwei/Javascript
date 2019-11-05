(function() {
   var a = b = 5;
})();
console.log(b);

function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}
test();

Question 2: Create “native” methods
Define a repeatify function on the String object. 
The function accepts an integer that specifies how many times the string has to be repeated. 
The function returns the string repeated the number of times specified. For example:
console.log('hello'.repeatify(3));
Should print hellohellohello.

String.prototype.repeatify = String.prototype.repeatify || function(num){
  var str='';
    for(var index=0;index<num;index++) str +=this;
    return str;
}
var ss = 'hello'.repeatify(3)
