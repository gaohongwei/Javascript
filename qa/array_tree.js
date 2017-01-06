 nodes = [{id: 1, pid:-1, children:[] },
       {id: 2, pid:1, children:[] },
       {id: 3, pid:1, children:[] },
       {id: 4, pid:1,  children:[] }];


Fill children array for each node.   
Return root nodes.   
root is: node.pid == -1;

function build_tree(nodes) {
     var index=0;
     var len = nodes.length;
     var map={};
     var roots = [];
     for(index=0;index<len;index++){
         var node = nodes[index];
         if (map[node.pid] == 'undefined') map[node.pid] = [];
         map[node.pid].push(node.id);
     }
     
     for(index=0;index<len;index++){
         var node = nodes[index];
         node.children = map[node.id];
     }
     
     var root = Math.min(Object.keys(map));
     var rootNode = nodes.find(function(node){node.id==root});     
}

