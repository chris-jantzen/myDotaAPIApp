const axios = require('axios');
const baseUrl = require('./config').baseUrl;

/**
 * @params: persona name (string)
 */
const getPlayerByName = name => {
  axios.get('search', {
    baseURL: baseUrl,
    params: {
      q: name
    }
  }).then(res => {
    console.log(res);
    // for (let i of res.data[0]) {
    //   console.log(i.avatarfull); // how to index into the picture to be used for the FindByPersonaName component
    // }
    return res;
  }).catch(err => {
    console.log(err.message);
  });
}

module.exports = getPlayerByName;