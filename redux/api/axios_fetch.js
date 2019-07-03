// axios
  const fetchProjects = (search, language) => {
    return function action(dispatch) {
      dispatch({ type: START_FETCH_PROJECT })

      const requestV1 = axios({
        method: 'GET',
        url: url,
        headers: []
      });
      const request = axios.get(url)
      return request.then(
        response => dispatch(fetchProjectSuccess(response)),
        error => dispatch(fetchProjectFailure(error))
      );
    }
  }

  const fetchProjectsV2 = (search, language) => {
    return function (dispatch) {
      console.log('fetchProjects:')
      dispatch(startFetchProject());    
      axios.get(url)
      .then((response) => {
        console.log('response:', response)
        dispatch(fetchProjectSuccess(response));
      })
      .then((error) => {
        dispatch(fetchProjectFailure(error));
      });
    };
  };


// fetch only handle network error
// does not handle 400/500 error
// so please use axios
  const url = 'https://api.github.com/search/repositories?q=ruby'
  export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
