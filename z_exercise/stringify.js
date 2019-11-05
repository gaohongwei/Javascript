// dropbox
function isObject(obj){
  return !!obj && typeof obj === 'object' && obj.constructor === Object
}

function isString(obj){
  return typeof obj === 'string' && obj.constructor === String
}

function isEmpty(obj){
  return obj == null
}

// recursive
function stringify0(obj){
  console.log('.... called')
  if(Array.isArray(obj)){
    console.log('case: array')
    let ar = obj.map( x =>stringify(x) );
    return '[' + ar.join(' ,') + ']'
  } else if (isObject(obj)) {
    console.log('case: object')
    let keys = Object.keys(obj).filter(key=> obj[key] !== undefined)
    let ar = keys.map( key => `"${key}":${ stringify(obj[key]) }`)
    return  '{' + ar.join(' ,') + '}'
  } else if (isString(obj))  {
    // not an object or
    console.log('case: string\t', obj)
    return `"${obj}"`;
  } else {
    console.log('case: simple:\t', obj)
    return obj;
  }
}

function stringify(obj){
  let out = '';
  let todo = [obj];

  while( todo.length > 0 ) {
    let item = todo.pop();
    if(Array.isArray(item) ){
      todo.push(']')
      todo.push(...item.reverse())
      todo.push('[')
    } else if (isObject(item)) {
      todo.push('}')
      for(let key in item){
        todo.push(item[key])

        todo.push(`"${key}":`)

        todo.push(',')
      }
      todo.push('{')
    } else if (isString(item))  {
      out += `${item}`;
    } else {
      out += item;
    }
  }
  return out
}

Test case

let obj, obj1;
let ss;

ss = stringify(obj)
obj1 = JSON.parse(ss)
obj = ['ar1', 'ar2']

obj = {
  key1: 'str1',
  key2: '',
  key3: null,
  key4: undefined,
  key5: 0,
  key6: false,
  key7: true,
  key8: 8
}



let ar = ['ar1', 'ar2']

obj = {
  "title": "Event Segmentation",
  "app": 114,
  "params": {
    "events": [
      {
        "type": "Visit: Home",
        "filters": [
          {
            "property": null,
            "op": "=",
            "values": []
          }
        ],
        "groupBy": []
      },
      {
        "type": "Signup",
        "filters": [
          {
            "property": "Plan",
            "op": "in",
            "values": [
              "enterprise",
              "premier"
            ]
          },
          {
            "property": "Did demo",
            "op": "=",
            "values": [
              true
            ]
          }
        ],
        "groupBy": []
      }
    ],
    "metric": "uniques",
    "range": "Last 30 days"
  }
};
