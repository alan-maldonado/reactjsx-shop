var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./forms/Leadcapture.jsx');

var navLinks = [{ title: "Home",href: "/"},{ title: "iOS",href: "/product/55"},{ title: "React",href: "/product/67"}];

var BasePage = React.createClass({
  render: function(){
    var style = {
      paddingTop: 20
    };

    return (
      <div>
        <NavBar bgColor="#FFF"
                                titleColor="#3097d1"
                                title="Product Shop"
                                navData={navLinks} />
        <div style={style} className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <LeadCapture />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
