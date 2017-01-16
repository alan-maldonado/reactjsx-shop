var HTTP = require('../services/HTTPService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submittedEmail: function(subscriber){
      HTTP.post('/subscribers', subscriber)
      .then(function(response){
        var msg = "";
        if (response.status === 200){
          msg = "Email submitted";
        } else {
          msg = "Submission Failed!";
        }
        this.trigger(msg);
      }.bind(this));
  }
});

module.exports = EmailStore;
