// async/await version
const getAll = (params) => {
  return async (dispatch) => {
    dispatch(type:'STARTED')
    try {
      const success = await axios.get('url', params)
      disptach(type:'SUCCESS', success))
    }
    catch(error) {
      disptach(type:'ERROR', error);
    }
}


// promise version
const getAll = () => {
  return (dispatch) => {
    dispatch(type:'STARTED')

    // v1
    axios.get('url') 
    .then((success)=> disptach(type:'SUCCESS', success))
    .then((error)=> disptach(type:'ERROR', error));

    // v2
    axios.get('url').then(
      (success) => disptach(type:'SUCCESS', success),
      (error) => disptach(type:'ERROR', error)
    )
  }
}
