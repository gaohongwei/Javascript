// class, constructor()
// child class, extends, calls super() in child constructor
// Static methods, similar to that in c++
// super is used to call corresponding methods of super class. 
// super.toString()
  class Parent {
    constructor(name) {
      this.name = name;
    }

    get(vname) {
      return this[vname]
    }
  }

// child class, extends
  class Child extends Parent {
    constructor(name, parent) {
      super(parent);
      this.parent = parent;
      this.name = name;    
    }  
  }

// 
  var p = new Parent('abc')
  p.get('name')

  var c = new Child('abc', 'p1')
  c.get('name')
  c.get('parent')
