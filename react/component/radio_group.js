import React from "react"
import PropTypes from "prop-types"

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_value: this.props.selected_value
    }
  }
  componentWillMount(){
    window.setSelectedRadio = (selected) => {
      this.setState( { selected_value: selected });
    };
  }
  render () {
    return (
      <span>
      {this.props.value_options.map(
        (option,index)=>
          <label key={ index } >
            <input type='radio'
              name= {this.input_name}
              value={option.value}
              checked={ option.value == this.state.selected_value}
              onChange = {this.props.onChange}
            />
            {option.label}
          </label>
        )
      }
      <br/>selected: {this.state.selected_value}
      </span>
    );
  }
}

RadioGroup.propTypes = {
  input_name:     PropTypes.string,
  value_options:  PropTypes.array,
  selected_value: PropTypes.string,
  onChange:       PropTypes.func
};
export default RadioGroup
