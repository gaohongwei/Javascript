const wrapper = shallow(<MyComponent />);


  function getComponent(defaultProps, overrides = {}) {
    return shallow(<MyComponent {...{...defaultProps, ...overrides}}/>);
  }
const defaultProps = {}
const wrapper = getComponent(defaultProps, { .  });
