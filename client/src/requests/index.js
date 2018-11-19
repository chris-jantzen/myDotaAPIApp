const axios = require('axios');
const baseUrl = require('./config').baseUrl;

const getPlayerByName = name => {
  axios.get('search', {
    baseURL: baseUrl,
    params: {
      q: name
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err.message);
  });
}

export default getPlayerByName;