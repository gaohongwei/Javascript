https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript


如何戒酒





Assumption:
  All variables has been declared/defined
  So can compare variable with value

  v10 not declared/defined
  > "use strict";
  > let v1;
  undefined
  > typeof v1
  'undefined'
  > typeof v10
  'undefined'
  > v10
  Thrown:
  ReferenceError: v10 is not defined

  Variable status:
    undeclared,  skip this case.
    declared but unassigned
    declared and assigned

Special values:
  null
  undefined
  false

null & undefined
  Most times non-null need to check explicitly them
  since they are both falsy values.

Logic:
  typeof v1 === 'undefined' // not defined or defined but not assigned
  v1 === undefined // not assigned
  undefined == null // true
  false == null // false
  typeof v1 === 'object' // an object or null
  typeof v1 === 'object' && v1 !== null // // an non-null object



  if ( v1 == null) {
       // do something
  }

  if ( v1 === undefined ||  v1 === null) {
       // do something
  }

  if( typeof  v1 === 'undefined' ||  v1 === null ){
      //
  }

  function isNull (value) {
    return value === null;
  }

  // Returns if a value is undefined
  function isUndefined (value) {
    return typeof value === 'undefined';
  }
