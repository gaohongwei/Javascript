fetch(url)
  .then((response) => {
    return response.json()})
  .then((response) => {
    this.setState(response);
  })
  .catch(error => {
    this.setState(error);
  })

// Complete syntax
fetch(url, obj), object is optional

 var obj = { 
   method: 'post', 
   headers: {
     'Authorization': 'Basic '+btoa('username:password'), 
     'Content-Type': 'application/x-www-form-urlencoded'
   }, 
   body: 'A=1&B=2'
 }

 var obj = {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': '',
    'Host': 'api.producthunt.com'
  },
  body: JSON.stringify({
    'client_id': '(API KEY)',
    'client_secret': '(API SECRET)',
    'grant_type': 'client_credentials'
  })
