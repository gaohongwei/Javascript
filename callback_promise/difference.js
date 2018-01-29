Asynchronous
  Normally code is synchronous
  You are not sure about asynchronous operations
    their completion time
    the order of their return

Callbacks
  are the standard way of handling asynchrnous code
  are nested, so code is ugly and difficult to read
  make error handling difficult


Promises
  The best way to handle asynchronous code.
  Represents the result of an asynchronous operation.
  Promise constructor takes two arguments - 
    one fulfils the promise 
    the other rejects the promise
  No callback parameters so cleaner code
  No nested code, all flatterned
  Naturally handle errors, catch
  A promise is in one of three different states: pending, fulfilled or rejected
  promise.done allows us to wait for the promise to be fulfilled or rejected before doing something with it
  Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again)
