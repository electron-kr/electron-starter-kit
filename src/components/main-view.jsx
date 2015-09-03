import React from "react";

export class MainView extends React.Component {
  constructor() {
    super();

    this.mainStyle= {
      position: 'absolute',
      width: '500px',
      height: '250px',
      top: '50%',
      left: '50%',
      marginTop: '-125px',
      marginLeft: '-250px',
      textAlign: 'center'
    };

    this.headerStyle = {
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '60px',
      fontWeight: 100,
      margin: 0,
      padding: 0
    };
  }

  render() {
    return <div style={this.mainStyle}>
      <header><h1 style={this.headerStyle}>Electron Starter Kit</h1></header>
      <section></section>
      <footer></footer>
    </div>;
  }
}
