const axios = require('axios');
const baseUrl = require('./config').baseUrl;

/**
 * params: persona name (string)
 */
function getPlayerByName(name) {
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

module.exports = getPlayerByName;