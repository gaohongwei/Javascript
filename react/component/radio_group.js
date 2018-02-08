import React from "react"
import PropTypes from "prop-types"

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.props.onChange.bind(this);
    this.state = {
      selected_value: this.props.selected_value
    }
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
              onChange = {this.onChange}
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
