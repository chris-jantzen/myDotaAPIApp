const axios = require('axios');
const baseUrl = require('./config').baseUrl;

axios.get('search', {
  baseURL: baseUrl,
  params: {
    q: 'Thunder'
  }
}).then(res => {
  let accountId = '';
  for(let i of res.data) {
    if(i.avatarfull === 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3f02c2813081014a0668feddc78f1acd898cf44_full.jpg') {
      console.log(i.personaname);
      accountId = i.account_id;
      console.log(accountId);
    }
  }
}).catch(err => {
  console.log(err.message);
});