import React from 'react'
import PropTypes from 'prop-types';

// version 1
const ProjectTable = (props) => {
  return ()
}

ProjectTable.propTypes = {
  items: PropTypes.array.isRequired
}

export default ProjectTable;


// version 2
ProjectTable.propTypes = {
  items: PropTypes.array.isRequired
}
export default function ProjectTable(props) {

}

// version 3
export default class MyComponent extends React.Component {
  part1() {
    return (
      <FormGroup className='selectme'>
      </FormGroup>
    );
  }

  render() {
    return (
      {this.part1()}
    );
  }
}
