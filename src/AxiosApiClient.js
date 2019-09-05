const API_ENDPOINT = 'http://localhost:3001/';

const axios = require('axios');

const getRequest = async (route) => {
  const endpoint = API_ENDPOINT + route;
  return axios.get(endpoint)
    .then((response) => response.data)
    .catch((error) => error)
    .finally(() => {

    });
};

const postRequest = async (route, body) => {
  const endpoint = API_ENDPOINT + route;
  return axios.post(endpoint, body)
    .then((response) => response.data)
    .catch((error) => error);
};

export default {
  getRequest,
  postRequest,
};
