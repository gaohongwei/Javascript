// Create component  and render it
// A component can have variables as attributes
// Use {} for variable or function call in the html ,
var MyComponentVar = React.createClass({
  render1: function(){ 
    return ( <h1>Hello, {this.props.name}!</h1>);
  }
  render2: function(){
    return (
      <ul> 
      {
        this.props.items.map(function(item) {return <li key={item}>{item}</li>})
      }
      </ul>
    ); 
  }
  render3: function() {
    return (     
      <div className='myClass' dangerouslySetInnerHTML={{__html:this.props.children}} />
    );
  }  
});

React.render(<MyComponentVar name="Handsome" />, document.body);

// Define event
// Intialize variables
// Update variables
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});
