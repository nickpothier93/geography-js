import React from "react";
import $ from 'jquery'; 
import Utils from "./Utils";

export default class HighScores extends React.Component {
    render() {
        return (
          <div>
            <div id="highBtn">
              <button onClick={startHighScore}>HighScores</button>
            </div>
            <div id="highScores" style={{display: 'none'}}>
              <p>High Scores</p>
                <ol>
                  <li>Test1 10000</li>
                  <li>Test2 5000</li>
                  <li>Test3 3000</li>
                  <li>Test4 2000</li>
                  <li>Test5 1000</li>
                </ol>
            </div>
          <div id="highBackBtn" style={{display: 'none'}}>
            <button onClick={startMenu}>Go Back</button>
          </div>
        </div>
        )
    }
}
const startHighScore = () => {
  Utils.clearMenu();
  $('#highBackBtn').show();
  $('#highScores').show();
}

const startMenu = () => {
  Utils.loadMenu();
  $('#highBackBtn').hide();
  $('#highScores').hide();
}