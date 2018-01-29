fetch return a promise object

var url = 'https://www.google.com';
var my_get = fetch(url, { mode: 'no-cors' });

var my_post = fetch(url, 
  {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }
)

my_get.then(
  function(result) {
    console.log("Worked!");     
    console.log(result.body); 
  },
  function(err) {
    console.log(err); // Error: "It broke"
  }
);

// Update

function update(data) {
  return fetch('/api/update', {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(()=>console.log('updated!!!'))
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
