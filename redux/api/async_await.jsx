async/await(es7)
// https://medium.com/@kkomaz/react-to-async-await-553c43f243e2
limit the side effects of using promises aka
allows asynchronous code to look more synchronous.

  export default function createUser(params) {
    return async dispatch => {
      function onSuccess(success) {
        dispatch({ type: CREATE_USER, payload: success });
        return success;
      }
      function onError(error) {
        dispatch({ type: ERROR_GENERATED, error });
        return error;
      }
      try {
        const success = await axios.post('http://www..., params);
        return onSuccess(success);
      } catch (error) {
        return onError(error);
      }
    }
  }

export const validateUser = (data) => {
  return async (dispatch) => {
    dispatch(validateUserStart());
    try {
      const response = await axios.post(validate_url, data);
      dispatch(validateUserSuccess(response.data));
    } catch (error) {
      dispatch(validateUserFail(error));
    };
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    dispatch(createUserStart());
    try {
      const response = await axios.post(create_url, data);
      dispatch(createUserSuccess(response.data));
    } catch (error) {
      dispatch(createUserFail(error));
    };
  };
};

export const fetchUser = (accessToken, expiresIn) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const response = await axios.post(update_url, {}, {
        headers: {
          'X-Authorization': `Token ${accessToken}`
        }
      });
      if (expiresIn) {
        cookies.set('my_access_token', accessToken, {
          maxAge: expiresIn,
          path: '/'
        });
      }
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFail({
        message: error.response.data.error.message,
        status: error.response.status
      }));
    };
  };
};

export const updateUser = (accessToken, payload) => {
  return async (dispatch) => {
    dispatch(updateUserStart());
    try {
      const response = await axios.patch(update_url, payload, {
        headers: {
          'X-Authorization': `Token ${accessToken}`
        }
      });
      if (response.data.data.signingURL) {
        dispatch(updateUserSuccess(response.data));
      } else {
        const maxReAttempts = 5;
        let attemptCount = 0;
        let signingURL;
        let reAttemptResponse;

        while (!signingURL && attemptCount < maxReAttempts) {
          attemptCount++;
          reAttemptResponse = await axios.post(update_url, {
            accessToken
          }, {
            headers: {
              'X-Authorization': `Token ${accessToken}`
            }
          });
          signingURL = reAttemptResponse.data.data.signingURL;
          await sleep(1000);
        }
        if (signingURL) {
          dispatch(updateUserSuccess(reAttemptResponse.data));
        } else {
          dispatch(updateUserFail({
            message: 'Something went wrong when server is trying to get your document. Please try again.'
          }));
        }
      }
    } catch (error) {
      dispatch(updateUserFail({
        message: error.response.data.error.message,
        status: error.response.status
      }));
    };
  };
};

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
