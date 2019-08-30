
const API_ENDPOINT = 'http://localhost:3001/';

const axios = require('axios');

const getRequest = async (route) => {
  const endpoint = API_ENDPOINT + route;
  return await axios.get(endpoint)
  .then(function (response) {
    console.log('Got a response')
    return response.data;
  })
  .catch(function (error) {
    return error;
  })
  .finally(function () {

  });
}

const postRequest = async (route, body) => {
  const endpoint = API_ENDPOINT + route;
  return await axios.post(endpoint, body)
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
