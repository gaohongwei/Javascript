import React from "react"
import PropTypes from "prop-types"

const RadioGroup = props =>
  <span>
    {props.value_options.map(
      (option,index)=>
        <label key={ index } >
          <input type='radio'
            name= {props.input_name}
            value={option.value}
            checked={ option.value == props.selected_value}
            onChange={props.onChange}
          />
          {option.label}
        </label>
      )
    }
    <br/>selected: {props.selected_value}
  </span>



RadioGroup.propTypes = {
  input_name:     PropTypes.string,
  value_options:  PropTypes.array,
  selected_value: PropTypes.string
};

export default RadioGroup
