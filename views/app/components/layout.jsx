var React = require('react');

module.exports = React.createClass({
    render: function () {
      return (
        <html>
          <head>
            <meta charSet='utf-8' />
            <title>Weather App</title>
            <link rel='stylesheet' href='/stylesheets/style.css'></link>
            <script src='/main.js'></script>
          </head>
          <body>
            {this.props.children}            
          </body>
        </html>
      );
    }
  });
