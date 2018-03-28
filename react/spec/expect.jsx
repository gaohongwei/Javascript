expect(select.html()).to.equal('html');
expect(select.html()).match(/pattern/) 

const wrapper = shallow(<MyComponent />);

expect(wrapper.find(Foo)).to.have.length(3);
expect(wrapper.find('.icon-star')).to.have.length(1);
expect(wrapper.contains(<div className="unique" />)).to.equal(true);
wrapper.find('button').simulate('click');

(wrapper.find('.fn-device-identifier')).to.have.length(1);
(wrapper.text()).to.include('abc');

(inputs.length).to.equal(2);
(wrapper.instance().state.editAddressModal).to.equal(true);
(wrapper.instance().state.editError).to.equal(null);

(cssClass).to.equal('form-group has-error');


(postState).to.have.property('showErrorModal', true);


(wrapper.text()).to.include('There are no orders to be configured');

(result).to.deep.equal(['linx', 'ip_phone']);


(wrapper.contains("Test")).to.equal(true);

(wrapper.find('.users-total').text()).to.equal('abc');

(node.text()).to.equal('abc');
(wrapper.find('.device-picker-dropdown').first().text()).to.equal('abc');
(wrapper.state('lineItems').length).to.equal(1);
(wrapper.state('lineItems')[0].quantity).to.equal(2);
(wrapper.find('.todays-total').text()).to.equal('abc');
(wrapper.find('.monthly-bill-total').text()).to.equal('abc');

(onChange).to.have.been.called.with("abc");
expect(onChange).to.have.been.called;
