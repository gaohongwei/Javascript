String.prototype.rep = String.prototype.rep || function(times){
  var s = ''
  for(var i=0;i<times;i++){
    s += this;
  }
  return s;
}
