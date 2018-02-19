// Simple Usage
  fetch(url)
    .then((response) => {
      return response.json()})
    .then((response) => {
      this.setState(response);
    })
    .catch(error => {
      this.setState(error);
    })

// Complete Usage
  fetch(url, obj), object is optional

  var option = {
    credentials: 'same-origin',
    method: 'post',
    headers: headers,
    body: JSON.stringify(body_data)
  };
  var body_data = {
    'client_id': '(API KEY)',
    'client_secret': '(API SECRET)',
    'grant_type': 'client_credentials'  
  }
  var headers1 = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
  };

  var headers2 = {
     'Authorization': 'Basic '+btoa('username:password'), 
     'Content-Type': 'application/x-www-form-urlencoded'
  }

  var headers3 = {
    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
