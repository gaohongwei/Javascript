<script src="https://cdnjs.cloudflare.com/ajax/libs/vivagraphjs/0.9.0/vivagraph.min.js"></script>
  
function draw1(){
  var graph = Viva.Graph.graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addLink(1, 2);

  var layout = Viva.Graph.Layout.forceDirected(graph, {
      springLength : 10,
      springCoeff : 0.0005,
      dragCoeff : 0.02,
      gravity : -1.2
  });

  var renderer = Viva.Graph.View.renderer(graph, {
    container : document.getElementById("topology")
  });
  renderer.run();
}
  function draw2(){
    var resource_type= 'AWS::EC2::Instance';
    var resource_id='i-00585ba63034c2230';
      fetch(config_url(resource_type, resource_id))
        .then((response) => {
          return response.json()})
        .then((response) => {
          var depth = -1;
          var details = response
          console.log(details);
          loadGraph(details, depth);
        })
        .catch(error => {
          console.log(error);
        })
  }
