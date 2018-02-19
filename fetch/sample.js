fetch(url)
  .then((response) => {
    return response.json()})
  .then((response) => {
    this.setState(response);
  })
  .catch(error => {
    this.setState(error);
  })
