// Linkedin
// Que-2
/*
Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order.
Thus, given a collection containing [0, [1, 3, 5], [4, 7, 3], [[2, 3], 4], {a:2}] 
the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4, {a:2}] */

// flat a nested array


function flat(ar){
  let out = []
  for(let item of ar){
    if(Array.isArray(item)){
      let inside = flat(item);
      out.push(...inside)
    } else {
      out.push(item)
    }
  }
  return out
}

let ar 
ar = [0, [1, 3, 5], [4, 7, 3], [[2, 3], 4], {a:2}]
ar = [0, [1, 3, 5], [4, 7, 3], [[2, 3, {a:2}], 4]]
flat(ar)
