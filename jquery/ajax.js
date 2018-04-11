Use promise in jquery $.ajax 

$.ajax 
success and error options for the async callbacks. 
.done and .fail methods are more easy and useful.

Callback:
  $.ajax({
    url: "/someurl",
    method: "GET",
    data: { 
      a: "a"
    },
    success: function(data) {
      console.log('success', data) 
    },
    error: function(xhr) {
      console.log('error', xhr);
    }
  })

Promise: .done and .fail methods.
  $.ajax({
    url: "/someurl",
    method: "GET",
    data: { 
      a: "a"
  })
  .done(function(data) {
    console.log('success', data) 
  })
  .fail(function(xhr) {
    console.log('error', xhr);
  });


Promise method can be used to bind multiple callbacks
When using options for callbacks, only one callback

  $.ajax({
    url: "/someurl",
    method: "GET",
    data: { 
      a: "a"
  })
  .done(function(data) {
    console.log('success callback 1', data) 
  })
  .done(function(data) {
    console.log('success callback 2', data) 
  })
  .fail(function(xhr) {
    console.log('error callback 1', xhr);
  })
  .fail(function(xhr) {
    console.log('error callback 2', xhr);
  });
  
This help you to smaller and compact functions, 
which lead to higher reusability and lower complexity. 
Also small functions are easier to unit test.

Promise can be used to bind callback conditionaly
When I want to do conditional functionality after a ajax call, 
If I am using an options I want to do condition checking inside the callback 
where as when using .done or .fail method I can bind the callback conditionaly.

  var jqXhr = $.ajax({
    url: "/someurl",
    method: "GET",
    data: { 
      a: "a"
  });

  if (someConditionIstrue) {
    jqXhr
    .done(function(data) {
      console.log('when condition is true', data);
    })
    .fail(function(xhr) {
      console.log('error callback for true condition', xhr);
    });
  } else {
    jqXhr.done(function(data){
      console.log('when condition is false', data);
    })
    .fail(function(xhr) {
      console.log('error callback for false condition', xhr);
    });
  }
if I want a common callback other than conditional ones, I can bind directly on jqXhr variable outside the if-else block.

  var jqXhr = $.ajax({
    url: "/someurl",
    method: "GET",
    data: { 
      a: "a"
  });

  jqXhr
  .done(function(data) {
    console.log('common callback', data);
  })
  .fail(function(xhr) {
    console.log('error common back', xhr);
  });
