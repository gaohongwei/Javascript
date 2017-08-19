#####  1. Render the view  #####
ReactDOM.render(
  element,
  document.getElementById('root')
);

#####  2. Define Render  #####
function JsFunction(props) {
  return <h1>Hello, {props.name}</h1>;
}

class ReactComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

var ResourceTable = React.createClass({
  getInitialState: function() {
     return {
         value: instances[0].value,
         details: null,
         error: null
     }
  },  
  render: function() { 
  }
});

var element;
element = <h1>Hello, world</h1>;
element = new JsFunction({name: 'JsFunction'});
element = <JsFunction name = 'JsFunction' />;
element = <ReactComponent name = 'ReactComponent' />;
