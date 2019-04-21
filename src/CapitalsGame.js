import React from "react";
import Flag from "./Flag.js"
import QuizButton from "./QuizButton"
import $ from 'jquery'; 
import Utils from "./Utils.js";

export default class CapitalGames extends React.Component {
    render() {
        return (
          <div>
            <div id="capitalsBtn">
              <button onClick={startCapitalsGame}>Capitals</button>
            </div>
          <div id="capitalsGame" style={{display: 'none'}}>
            <Flag flagFile={require('./img/ye.png')} />
            <QuizButton answer='Test1' />
            <QuizButton answer='Test2' />
            <QuizButton answer='Test3' />
            <QuizButton answer='Test4' />
          </div>
        </div>
        )
    }
}

const startCapitalsGame = () => {
  Utils.clearMenu();
  $('#capitalsGame').show();

}