// Returns if a value is an object
function isObject (value) {
return value && typeof value === 'object' && value.constructor === Object;
}

// check object
function isObject(o) {
  return o !== null && typeof o === 'object' && Array.isArray(o) === false;
}

function isObject(o) {
  return o instanceof Object && o.constructor === Object;
}

// ES5 actually has a method for this (ie9+)
Array.isArray(value);

// Returns if a value is an array
function isArray (value) {
return value && typeof value === 'object' && value.constructor === Array;
}

// Returns if a value is a regexp
function isRegExp (value) {
return value && typeof value === 'object' && value.constructor === RegExp;
}

Error
Errors in javascript are the same as "exceptions" in many other programming languages. 
They come in a couple different forms like for instance Error, TypeError and RangeError. 
An instanceof statement is enough for them all, but just to be extra sure we also check for the "message" property that errors have.

// Returns if value is an error object
function isError (value) {
return value instanceof Error && typeof value.message !== 'undefined';
}
