
Use the jQuery ajaxSetup function, that can set up default values for all ajax requests.
$.ajaxSetup({
  headers: {
    'Authorization': "Basic XXXXX"
  }
});


$.ajax
({
  type: "GET",
  url: "index1.php",
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
  },
  data: '{ "comment" }',
  success: function (){
    alert('Thanks for your comment!'); 
  }
});

$.ajax({
    type: 'GET',
    url: 'http://example.com',
    headers: {
        "Authorization": "Basic " + auth
    },
    success : function(data) {
    },
});

$.ajax
  ({
    type: "GET",
    url: "index1.php",
    dataType: 'json',
    async: false,
    data: '{}',
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', make_base_auth(username, password)); 
    },
    success: function (){
        alert('Thanks for your comment!'); 
    }
});
