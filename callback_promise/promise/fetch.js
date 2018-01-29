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
