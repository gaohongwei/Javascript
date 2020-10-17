

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  
  
    const select = component.find('.cssClass');

    select.simulate('change', {
      value: 'one'
    });

    expect(onSelected).to.have.been.called.with('one');
