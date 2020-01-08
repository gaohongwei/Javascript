
Use destructuring in JavaScript function arguments
  function myFunction({ text, line, truncate }) {

  }

Define defaults in the function configuration, you'd use the following:

function myFunction({ text = "", line = 0, truncate = 100 } = {}) {

}
