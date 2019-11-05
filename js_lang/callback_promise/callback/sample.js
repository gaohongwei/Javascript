
  var url = 'https://www.google.com/';
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success : function(data){
      alert('succeeded')
      target.prop('value',data)
    },
    error: function(data){
      alert('failed')
      target.prop('value',data)
    }
  });

  $.ajax({
    url: url,
    dataType: 'jsonp',
  })
  .done(function(data){
      alert('succeeded')
      target.prop('value',data)
  })
