var React = require('react');

var HomePage = React.createClass({

      componentDidMount: function () {
        console.log("component mounted");

      },
      render: function () {
        return (
          <div>
            <h1>Home Page</h1>
            <h2>if this page is shown, router works fine...</h2>
            <h2>{this.props.tryout22}</h2>
          </div>
        )
      }
  });


module.exports = HomePage;