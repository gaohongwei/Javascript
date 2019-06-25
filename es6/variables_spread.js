It takes an array and spreads it (like jam) into a comma separated list of arguments.

Sample 1
  let array = ['one', 'two', 'three']

  // These two are exactly the same
  console.log(...array) // one two three
  console.log('one', 'two', 'three') // one two three


Contact array
  let array1 = ['one', 'two']
  let array2 = ['three', 'four']
  let array3 = ['five', 'six']

  // ES6 way
  let combinedArray = [...array1, ...array2, ...array3]
  console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']

  // ES5 way
  let combinedArray = array1.concat(array2).concat(array3)
  console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
  
Remove an item from an array without mutating the array
  Used in Redux
