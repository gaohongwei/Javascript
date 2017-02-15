
  var url = 'https://www.google.com/';
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success : function(data){
      target.prop('value',data)
    }
  });
