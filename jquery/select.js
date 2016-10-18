$(document).ready(function(){

});

	alert($('#celebs tr').length + ' elements!');
	alert($('#celebs tbody tr').length + ' elements!');
	alert($('#celebs tbody tr:even').length + ' elements!');

  var fontSize = $('#celebs tbody tr:first').css('font-size');
  alert(fontSize);

  $('#celebs tbody tr:even').css('background-color','#dddddd');
  $('#celebs tbody tr:even').css('background-color','#dddddd');
  $('#celebs tbody tr:even').css('color', '#666666');
  $('#celebs tbody tr:even').css( 
    {'background-color': '#dddddd', 'color': '#666666'}  
  );
  $('#celebs tbody tr:even').css({
    'background-color': '#dddddd', 
    'color': '#666666',
    'font-size': '11pt',
    'line-height': '2.5em' 
  });
  $('#celebs tbody tr:even').addClass('zebra');  // add css class

  $('#hideButton').click(function(){
    $('#disclaimer').hide();
  });

  $('#hideButton').click(function(){
    $(this).hide();
  });

  $('#hideButton').click(function(){
    $('#disclaimer').hide();
  });
  $('#showButton').click(function(){
    $('#disclaimer').show();
  });

  $('#toggleButton').click(function(){
    if($('#disclaimer').is(':visible')) {
      $('#disclaimer').hide();
    } else {
      $('#disclaimer').show();
    }
  });

  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
  });

  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
    
    if($('#disclaimer').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show');
    }
  });

  $('<input type="button" value="toggle" id="toggleButton">').insertBefore('#disclaimer');
  $('<input type="button" value="toggle" id="toggleButton">').insertAfter('#disclaimer');
  $('#toggleButton').click(function(){
    $('#disclaimer').toggle();
  });

  $('<strong>START!</strong>').prependTo('#disclaimer');
  $('<strong>END!</strong>').appendTo('#disclaimer');

  $('#no-script').remove();
  $('#celebs tr').remove(':contains("Singer")');

  $('p').html('good bye, cruel paragraphs!');
  $('h2').text('All your titles are belong to us');

alert($('h2:first').text());

    $('#disclaimer').fadeOut();
    $('#disclaimer').toggle('slow');
    $('#disclaimer').slideToggle('slow');

  $('#toggleButton').click(function(){
    $('#disclaimer').slideToggle('slow', function(){
      alert('The slide has finished sliding!')
    });
  });

  $('#hideButton').click(function(){
    $('#disclaimer').slideUp('slow', function(){
      $('#hideButton').fadeOut();
    });
  });

  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').mouseover(function(){
    $(this).addClass('zebraHover');
  });
  $('#celebs tbody tr').mouseout(function(){
    $(this).removeClass('zebraHover');
  });


  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').hover(function(){
    $(this).addClass('zebraHover');
  }, function(){
    $(this).removeClass('zebraHover');
  });


  $('.spoiler').hide();
  $('<input type="button" class="revealer" value="Tell Me!"/>').insertBefore('.spoiler');
  $('.revealer').click(function(){
    $(this).hide();
    $(this).next().fadeIn();
  });


  $('#celebs tbody tr:even').addClass('zebra');
  $('#celebs tbody tr').click(function(){
    $(this).toggleClass('zebraHover');
  });

