// array.map(callbackfn),    create a new array by calling callbackfn on each element of original array
// array.filter(callbackfn), create a new array by selecting elements from original array
// function callbackfn(value, index, array1)
// array

// filter and findIndex
  var selected = {value: 'my_value'}
  var new_array = array.filter(item => item.value != selected.value );
  var column_id = array.findIndex(item => item.value == selected.value);
