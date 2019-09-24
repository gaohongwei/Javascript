Array?
  Array.isArray
  Array.isArray([]) => true
  Array.isArray({}) => false

Array concat
  push array into array
  let ar1 = [1,2]
  let ar2 = [10,20]
  ar1.push(ar2) // nested array
  ar1.push(...ar2) // [ 1, 2, 10, 20 ]

Search:
  filter:
    r = ar.filter(item => item.length > 5)

  ar.reduce(((r,item) => r += item), 0)

find:
  find:
    r = ar.find(item => item.length > 5)
  findIndex:
    r = ar.findIndex(item=> item.length > 5 )
  indexOf:
   r = ar.indexOf('limit')
  lastIndexOf:
   r = ar.lastIndexOf('limit')

check:
  every:
    ar.every( item=> item.length > 5)
  some:
    ar.some( item=> item.length > 5)
  includes:
    ar.includes('abc')

loop
  join:
    ar.join(',')
  map:
    ar.map( item =>  item + '_00')
    ar.forEach(item => console.log(item))

loop ... for
  for ... in // index
  for ... of // array elements
  let obj = {
    a: 'a001',
    b: 'b001'
  }

  for(v in obj){console.log(v)}

  let ar = ['a001', 'a002']
  for(let v in ar){console.log(v)}
  for(let v of ar){console.log(v)}
