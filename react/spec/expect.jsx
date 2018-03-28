
(wrapper.find('.fn-device-identifier')).to.have.length(1);
(wrapper.text()).to.include('abc');

(inputs.length).to.equal(2);
(wrapper.instance().state.editAddressModal).to.equal(true);
(wrapper.instance().state.editError).to.equal(null);

(cssClass).to.equal('form-group has-error');


(postState).to.have.property('showErrorModal', true);


(wrapper.text()).to.include('There are no orders to be configured');

(result).to.deep.equal(['linx', 'ip_phone']);


(component.contains("Test")).to.equal(true);

(component.find('.users-total').text()).to.equal('abc');

(node.text()).to.equal('abc');
(component.find('.device-picker-dropdown').first().text()).to.equal('abc');
(component.state('lineItems').length).to.equal(1);
(component.state('lineItems')[0].quantity).to.equal(2);
(component.find('.todays-total').text()).to.equal('abc');
(component.find('.monthly-bill-total').text()).to.equal('abc');


(onChange).to.have.been.called.with("abc");
