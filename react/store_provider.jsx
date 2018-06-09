import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

const userStore = createStore(reducer);

export default class EditUser extends React.Component {
  render() {
    return (
      <Provider store={userStore}>
        <EditUserContainer {...this.props} />
      </Provider>
    );
  }
}

EditUser.propTypes = {
  onClose: PropTypes.func.isRequired
};
