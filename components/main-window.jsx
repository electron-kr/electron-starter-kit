'use strict';

var React = require('react');

var header = {
  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  fontSize: '60px',
  fontWeight: 100,
  margin: 0,
  padding: 0
};

var mainWindow = {
  position: 'absolute',
  width: '500px',
  height: '250px',
  top: '50%',
  left: '50%',
  marginTop: '-125px',
  marginLeft: '-250px',
  textAlign: 'center'
};

module.exports = React.createClass({
  render: function() {
    return <div style={mainWindow}>
      <header><h1 style={header}>Electron Starter Kit</h1></header>
      <section></section>
      <footer></footer>
    </div>;
  }
});
