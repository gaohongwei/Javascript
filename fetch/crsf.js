
headers= {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }

jQuery
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
