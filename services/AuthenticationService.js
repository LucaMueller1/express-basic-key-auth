var request = require('request');
const axios = require("axios");
require('dotenv').config();

async function getToken(username, password) {
  return "sgr34th3h98hqoni4gq093h85h";
}


//check if supplied auth token is valid
async function introspect(token) {
  const introspectEndpoint = process.env.introspect_endpoint;

  const params = new URLSearchParams();
  params.append('token', token);
  params.append('client_id', process.env.client_id);
  params.append('client_secret', process.env.client_secret);

  return new Promise((resolve, reject) => {
    
    return axios.post(introspectEndpoint, params, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    .then((response) => {
      resolve(response.data);
    })
    .catch((err) => {
      console.log("Failed to introspect token", err);
      reject(err);
    })
  })
}

function getUrl() {
  return `${process.env.code_endpoint}?response_type=code&scope=openid&client_id=${process.env.client_id}&redirect_uri=`; //redirect url will be fetched in frontend
}


module.exports.getToken = getToken;
module.exports.introspect = introspect;
module.exports.getUrl = getUrl;