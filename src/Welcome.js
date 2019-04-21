import React from 'react';
import FlagsGame from "./FlagsGame.js";
import CapitalsGame from "./CapitalsGame.js";
import HighScores from "./HighScores.js";

export default class Welcome extends React.Component {
    render() {
      return (
        <div>
            <div id='mainMenu'>
                <h1>Geography.Js</h1>
                <h3>A simple quiz app made in React.Js</h3>
            </div>
              <div id="btns">
              <FlagsGame obj={this.props.obj}/>
              <CapitalsGame />
              <HighScores />
            </div>
      </div>
      )
    }
  }

    