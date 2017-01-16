var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');
var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
  mixins: [Reflux.listenTo(EmailStore, 'onChange')],
  getInitialState: function(){
    return {submitted: false};
  },
  onSubmit: function(e){
      if (!this.refs.fieldEmail.state.valid){
        alert('Email is required.');
      } else {
        //Send email request to host or server
        var subscriber = {
          email: this.refs.fieldEmail.state.value,
          firstName: this.refs.fieldName.state.value
        };

        Actions.submittedEmail(subscriber);
      }
  },
  onChange: function(msg){
    console.log('listener ' + msg);
  },
  render: function(){
    var sucessStyle = {
      color: "green",
      visibility: this.state.submitted ? "visible" : "hidden"
    };

    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">Get a free Ebook!</h4>
          </div>
          <div className="panel-body">
            <NameField type="First" ref="fieldName" />
            <br />
            <EmailField ref="fieldEmail" />
            <div className="row">
              <div className="col-sm-6">
                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
              </div>
              <div className="col-sm-2">
                <h5 style={sucessStyle}>Sucess!</h5>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = LeadCapture;
