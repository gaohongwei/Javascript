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
