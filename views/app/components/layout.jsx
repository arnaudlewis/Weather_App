var React = require('react');

module.exports = React.createClass({
    render: function () {
      return (
        <html>
          <head>
            <meta charSet='utf-8' />
            <title>Weather App</title>
            <link rel='stylesheet' href='/stylesheets/style.css'></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
            <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'></script>
          </head>
          <body>
            {this.props.children}
          </body>
        </html>
      );
    }
  });
