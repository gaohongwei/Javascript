$('#tba').click(function(){
  var target=$(this);
  create_list(target);

});

function create_list(target){
  var ar=['111','222','333'];
  var dom_parent=$('<ul>');
  var index,len=ar.length;
  for(index=0;index<len;index++){
    var dom_child=$('<ul>', {text: ar[index], id:ar[index] });
    dom_parent.append(dom_child);
  }
  target.append(dom_parent);
}

function create_select(target){
  var ar=['111','222','333'];
  var dom_parent=$('<select>');
  var index,len=ar.length;
  for(index=0;index<len;index++){
    var dom_child=$('<option>', {text: ar[index], id:ar[index] });
    dom_parent.append(dom_child);
  }
  target.append(dom_parent);
}
