queue/stack:
  ar.push('a99')
  ar.pop()
  ar.shift()
  ar.unshift('a00')

slice(start, end)
  returns the selected elements as a new array object.,
  starting at the given start argument,
  and ends at, but does not include, the given end argument.

  Sample:
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var myBest = fruits.slice(-3, -1);


    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var myBest = fruits.slice(-3, -1);

    ar.slice(1)
    ar.slice(1, -1)
    ar.slice(1, 2)


splice(index, howmany, item1, ....., itemX)
  adds to an array, and returns the removed item(s).
  removes items from an array, and returns the removed item(s).


  index Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
  howmany Optional. The number of items to be removed. If set to 0, no items will be removed

  Sample:
    Add items to the array:
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");

    At position 2, remove 2 items:
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    fruits.splice(2, 2);

    At position 2, add the new items, and remove 1 item:
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
