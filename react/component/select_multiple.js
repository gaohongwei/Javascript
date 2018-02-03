// ##### Controller
  @options = [
    { label: 'Vege', value: 'vege' },
    { label: 'Chocolate', value: 'chocolate' },
    { label: 'Vanilla', value: 'vanilla' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Caramel', value: 'caramel' },
    { label: 'Cookies and Cream', value: 'cookiescream' },
    { label: 'Peppermint', value: 'peppermint' },
  ]
// ##### View
  <%= react_component("MultiSelectField",{ options: @options, label: 'ABBC' }) %>
// ##### application.css.sas
  @import 'react-select/dist/react-select.css';
// #####  Component, MultiSelectField.js
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
// Source https://github.com/JedWatson/react-select/tree/master/examples/src/components/Multiselect.js
var MultiSelectField = createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: PropTypes.string,
  },
  getInitialState () {
    return {
      selected: []
    };
  },
  handleSelectChange (selected) {
    this.setState({ selected });
  },
  render () {
    var selected = this.state.selected;
    var options = this.props.options;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select
          id='select_me'
          multi
          onChange={this.handleSelectChange}
          options={options}
          value={selected}
        />
      </div>
    );
  }
});
export default MultiSelectField;
