import React, { Component } from 'react';
import Welcome from './Welcome.js';

class App extends Component {
  render() {
    var obj = {ad: {src: './img/ad.png', b1: "France", b2: "Andorra", b3: "Spain", b4: "Bermuda"},
              ae: {src: './img/ae.png', b1: "Qatar", b2: "Yemen", b3: "Oman", b4: "UAE"},
              af: {src: './img/af.png', b1: "Afghanistan", b2: "Pakistan", b3: "Turkmenistan", b4: "Iraq"}};
    return (
      <Welcome obj={obj}/>
    );
  }
}

export default App;
