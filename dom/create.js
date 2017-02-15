$('#tba').click(f_click);
function f_click(){
  var ar=['111','222','333'];  
  var target=$(this);
  var dom_ul=$('<ul>');
  var index,len=ar.length;
  for(index=0;index<len;index++){
    var dom_li=$('<ul>', {text: ar[index], id:ar[index] });
    dom_ul.append(dom_li);
  }
  target.append(dom_ul);
}
