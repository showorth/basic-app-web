
const API_ENDPOINT = 'http://localhost:3001/';

const axios = require('axios');

const getRequest = (route) => {
  const endpoint = API_ENDPOINT + route;
  return axios.get(endpoint)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  })
  .finally(function () {

  });
}

const postRequest = (route, body) => {
  const endpoint = API_ENDPOINT + route;
  return axios.post(endpoint, body)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });
}

export default {
  getRequest,
  postRequest
}
