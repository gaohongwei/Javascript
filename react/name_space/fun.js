var hostname = 'localhost';
const App = {
  instances: [],
  url: function(){
    return `http://${hostname}/api`;
  }
}
export default  App;
