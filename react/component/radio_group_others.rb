// https://stackoverflow.com/questions/27784212/how-to-use-radio-buttons-in-reactjs
// Version 1
  const RadioInputs = (props) => {
    /*
      [[Label, associated value], ...]
    */

    const inputs = [["Male", "M"], ["Female", "F"], ["Other", "O"]]
  render() {
    return (
      <div>
        {
          inputs.map(([text, value], i) => (
      <div key={ i }>
        <input type="radio"
                checked={ this.state.gender === value } 
          onChange={ /* You'll need an event function here */ } 
          value={ value } /> 
            { text }
            </div>
          ))
        }
      </div>
    )
  }
  
class App extends React.Component {
  setGender(event) {
    console.log(event.target.value);
  }
  
  render() {
    return ( 
      <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
     )
  }
}

const Radiocomponent = ({props})=>
    return ( 
      <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender" defaultChecked={props.value ==="MALE"} /> Male
        <input type="radio" value="FEMALE" name="gender" defaultChecked={props.value ==="FEMALE"}/> Female
      </div>
     )
  );
default export Radiocomponent;
