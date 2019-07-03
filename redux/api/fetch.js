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
