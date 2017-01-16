var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060';

var service = {
    get: function(url){
      return fetch(baseUrl + url)
      .then(function(response) {
          return response.json();
      });
    },
    post: function(url, body) {
        return fetch(baseUrl + url,{
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(body)
        }).then(function(response) {
            console.log(response);
            return response.json();
        });
    }
};

module.exports = service;
