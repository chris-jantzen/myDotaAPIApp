const axios = require('axios');
const baseUrl = require('./config').baseUrl;

axios.get('search', {
  baseURL: baseUrl,
  params: {
    q: 'Thunder'
  }
}).then(res => {
  console.log(res);
  let accountId = '';
  let personaname = '';
  for(let i of res.data) {
    if(i.avatarfull === 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3f02c2813081014a0668feddc78f1acd898cf44_full.jpg') {
      personaname = i.personaname;
      accountId = i.account_id;
      console.log(`Persona name: ${personaname}\nAccount ID: ${accountId}`);
    }
  }
}).catch(err => {
  console.log(err.message);
});
