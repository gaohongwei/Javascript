##### clear dropdown options
  $("#select_id option").remove();
  $('#select_id').children().remove();

##### Add dropdown options
  var p1= $('<option/>', { value: '1', text: 'lable 1'})
  var p2 = "<option value=2>label 2</option>"
  var p3 = "<option value='3'>label 3</option>"

  p1.appendTo('#select_id')
  $('#select_id').append(p2)
  $('#select_id').append(p3)

##### #####
$('#tba').click(function(){
  var target=$(this);
  create_list(target);
});

function create_list(target){
  var ar=['111','222','333'];
  var dom_top=$('<ul>');
  var index,len=ar.length;
  for(index=0;index<len;index++){
    var dom_child=$('<ul>', {text: ar[index], id:ar[index] });
    dom_top.append(dom_child);
  }
  target.children().remove('ul');
  target.append(dom_top);
}

function create_select(target){
  var ar=['111','222','333'];
  var dom_top=$('<select>');
  var index,len=ar.length;
  for(index=0;index<len;index++){
    var dom_child=$('<option>', {text: ar[index], id:ar[index] });
    dom_top.append(dom_child);
  }
  target.children().remove('ul');
  target.append(dom_top);
}
