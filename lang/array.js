Array.isArray
  Array.isArray([]) => true
  Array.isArray({}) => false

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

loop:
  join:
    ar.join(',')
  map:
    ar.map( item =>  item + '_00')
    ar.forEach(item => console.log(item))

check:
  every:
    ar.every( item=> item.length > 5)
  some:
    ar.some( item=> item.length > 5)
  includes:
    ar.includes('abc')
