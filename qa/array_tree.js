 data = [{id: 1, pid:-1, children:[] },
       {id: 2, pid:1, children:[] },
       {id: 3, pid:1, children:[] },
       {id: 4, pid:1,  children:[] }];
Fill children array for each node.   
Return root node.   
root is: item.pid == -1;

My solution:
function build(data) {
     var index=0;
     var len = data.length;
     var hs={};
     for(index=0;index<len;index++){
         var item = data[index];
         if (hs[item.pid] == 'undefined') hs[item.pid] = [];
         hs[item.pid].push(item.id);
     }
     
     for(index=0;index<len;index++){
         var item = data[index];
         item.children = hs[item.id];
     }
     
     var root = Math.min(Object.keys(hs));
     var rootNode = data.find(function(item){item.id==root});     
}
