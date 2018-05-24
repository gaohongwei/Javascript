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
