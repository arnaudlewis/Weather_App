var React = require('react');

var Essai = React.createClass({

      componentDidMount: function () {
        console.log("component mounted");

      },
      render: function () {
        return (
          <div>
            <h1>Essai</h1>
            <h2>if this page is shown, router works fine...</h2>
            <h2>{this.props.tryout}</h2>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Essai;