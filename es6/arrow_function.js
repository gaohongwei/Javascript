Syntax
Parameters
  Multiple Parameters:
    (param1, param2, …, paramN) =>
  Single Parameter:
    (singleParam) => 
     singleParam => 
  No Parameter:
    () => { statements }
Body
  In single statement, return can be skipped
  In multiple statements, return is a must
  var func = x => x * x;
  var func = (x, y) => { return x + y; };

  Advanced Syntax
  // Parenthesize the body of function to return an object literal expression:
  params => ({foo: bar})

  // Rest parameters and default parameters are supported
  (param1, param2, ...rest) => { statements }
  (param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
  statements }

An arrow function expression has
  a shorter syntax
  best suited for non-method functions
  does not have its own this, arguments, super, or new.target.
  they cannot be used as constructors.
  cannot be used as constructors and will throw an error when used with new.
  do not have a prototype property.
  cannot contain a line break between its parameters and its arrow.
  The yield keyword may not be used in the body

A normal function defines its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.
An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:
  function Person(){
    this.age = 0;

    setInterval(() => {
      this.age++; // |this| properly refers to the person object
    }, 1000);
  }

  var p = new Person();
