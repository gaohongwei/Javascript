  function getComponent(defaultProps, overrides = {}) {
    return shallow(<CallForward {...{...defaultProps, ...overrides}}/>);
  }

    const defaultProps = {
      mode: 'disabled',
      getValidationMessages: () => []
    };

    const onSelected = chai.spy();
    const component = getComponent(defaultProps, {
      onChange: onSelected,
      onClick: chai.spy()
    });   

    const select = component.find('.myclass');
    select.simulate('change', { target: { value: false } });
    expect(onSelected).to.have.been.called;
    expect(select.html()).to.equal('html');
    expect(select.html()).match(/pattern/) 
