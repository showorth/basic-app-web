const API_ENDPOINT = 'http://localhost:3001/';

const getRequest = async (route) => { // eslint-disable-line
  const endpoint = API_ENDPOINT + route;
  return fetch(endpoint, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })
      .then((response) => { // eslint-disable-line
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch((error) => error);
};


export default {
  getRequest,
};
