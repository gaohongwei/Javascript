nodes = [
    {id: 1, pid: 0 },
    {id: 2, pid: 1 },
    {id: 3, pid: 1 },
    {id: 4, pid: 1 }];
Fill children array for each node.
Return root nodes.
root are: node.pid == 0;

function build_tree(nodes) {
    var map={};
    var roots = [];
    var index;
    for(index=0;index<nodes.length;index++){
        var node = nodes[index];
        if (map[node.pid] == undefined) map[node.pid] = [];
        map[node.pid].push(node.id);
        if (node.pid < 1) roots.push(node)
    }
    for(index=0;index<len;index++){
        var node = nodes[index];
        node.children = map[node.id];
    }
    return roots;
}


function build_tree_v1(nodes) {
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
