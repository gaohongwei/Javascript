destructuring
  let scores = ['98', '95', '93', '90', '87', '85']
  let [first, second, third] = scores

  console.log(first) // 98
  console.log(second) // 95
  console.log(third) // 93

rest 
  The rest parameter packs everything into an array. 
  It appears in function parameters and while destructuring arrays.
  
  let scores = ['98', '95', '93', '90', '87', '85']
  let [first, second, third, ...restOfScores] = scores
  console.log(restOfScores) // [90, 87, 85]

  // ES5 way
  function sum () {
    let argsArray = Array.prototype.slice.call(arguments)
    return argsArray.reduce(function(sum, current) {
      return sum + current
    }, 0)
  }
  With the ES6 rest parameter, we could pack all comma separated arguments straight into an array.

  // ES6 way
  const sum = (...args) => args.reduce((sum, current) => sum + current, 0)

  // ES6 way if we didn't shortcut it with so many arrow functions
  function sum (...args) {
    return args.reduce((sum, current) => sum + current, 0)
  }
