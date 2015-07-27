import React from "react";

export class MainWindow extends React.Component {
  constructor() {
    super();

    this.mainWindow = {
      position: 'absolute',
      width: '500px',
      height: '250px',
      top: '50%',
      left: '50%',
      marginTop: '-125px',
      marginLeft: '-250px',
      textAlign: 'center'
    };

    this.header = {
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '60px',
      fontWeight: 100,
      margin: 0,
      padding: 0
    };
  }

  render() {
    return <div style={this.mainWindow}>
      <header><h1 style={this.header}>Electron Starter Kit</h1></header>
      <section></section>
      <footer></footer>
    </div>;
  }
}
