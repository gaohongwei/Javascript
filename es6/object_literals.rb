Property value shorthands
  write only the variable if your variable name matches your property name. 
  const fullName = 'Zell Liew'

  // ES6 way
  const Zell = {
    fullName
  }

  // Underneath the hood, ES6 does this:
  const Zell = {
    fullName: fullName
  }

Method shorthands
  const anObject = {
    // ES6 way
    aShorthandMethod (arg1, arg2) {},

    // ES5 way
    aLonghandMethod: function (arg1, arg2) {},
  }

Computed object property names
  dynamic property name
  const newPropertyName = 'smile'

  // ES6 way.
  const anObject = {
    aProperty: 'a value',
    // Dynamic property names!
    [newPropertyName]: ':D',
    ['bigger ' + newPropertyName]: 'XD',
  }
