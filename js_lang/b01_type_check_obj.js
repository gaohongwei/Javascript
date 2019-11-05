Basic
  function isEmpty(o){
    // not defined, or not assigned, or null
    // use of them
    return !!o
    return o == null
    return typeof o === 'undefined' || o === null
  }

  function isObjectType(o){
    // use of them
    return typeof o === 'object'
    return o instanceof Object
  }

  function isRealObject(o){
    // not from Date, String etc
    return o.constructor === Object
  }

  function isRealArray(o){
    return o.constructor === Array
  }

Actual usgae:
  function isObject(o){
    return isObjectType(o) || isRealObject(o)
  }

  function isObject(o){
    return o && typeof o === 'object' && o.constructor === Object
  }

  function isArray(o){
    return o && typeof o === 'object' && o.constructor === Array
  }

// ES5 actually has a method for this (ie9+)
Array.isArray(o);


// Returns if a o is a regexp
function isRegExp (o) {
return o && typeof o === 'object' && o.constructor === RegExp;
}

Error
Errors in javascript are the same as "exceptions" in many other programming languages.
They come in a couple different forms like for instance Error, TypeError and RangeError.
An instanceof statement is enough for them all, but just to be extra sure we also check for the "message" property that errors have.

// Returns if o is an error object
function isError (o) {
return o instanceof Error && typeof o.message !== 'undefined';
}



// Test case
//  v0, not defined
let v1 = null;
let v2 = 'abc';
let v3 = 3;
let v4 = false;
let v5 = {};
let v6 = [];
let v7 = new Object();
let v8 = new String('abc')
let v9 = new Date()


isObject(v1); // false
isObject(v2); // false
isObject(v3); // false
isObject(v4); // false

isObject(v5); // true
isObject(v6); // false
isObject(v7); // true
isObject(v8); // false
isObject(v9); // false
