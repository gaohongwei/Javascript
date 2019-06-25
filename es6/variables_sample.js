// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Merge multiple object
// es5
  var obj1 = { a: 1, b: 2 }
  var obj2 = { a: 2, c: 3, d: 4}
  var obj3 = Object.assign(obj1, obj2)
  
  var obj1 = { a: 0 , b: { c: 0}};
  var obj2 = Object.assign({}, obj1);


  var o1 = { a: 1 };
  var o2 = { b: 2 };
  var o3 = { c: 3 };

  var obj = Object.assign(o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(o1);  // { a: 1, b: 2, c: 3 }
  > o1 == obj
  true

  var o1 = { a: 1, b: 1, c: 1 };
  var o2 = { b: 2, c: 2 };
  var o3 = { c: 3 };
  var obj = Object.assign({}, o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }

// es6
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 2, c: 3, d: 4}
  const obj3 = {...obj1, ...obj2}

  # array to list of elements
  function sum(x, y, z) {
    return x + y + z;
  }

  const numbers = [1, 2, 3];

  console.log(sum(...numbers));
  // expected output: 6
  
Rest Properties
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  x; // 1
  y; // 2
  z; // { a: 3, b: 4 }

  let n = { x, y, ...z };
  n; // { x: 1, y: 2, a: 3, b: 4 }
  
state
  Object.assign({}, state, {a: action.filter})
  { ...state, a: action.filter }
