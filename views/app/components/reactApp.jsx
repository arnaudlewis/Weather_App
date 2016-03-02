
var React = require('react');

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log("component mounted");
        console.log(this.props.essai);

      },
      render: function () {
        return (
          <div>
            <h1> React implem works fine</h1>
            <h2 className="tryCSS">if this is blue, CSS works fine</h2>
            <h2>{this.props.essai}</h2>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;