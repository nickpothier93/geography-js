import React from 'react';
import FlagsGame from "./FlagsGame.js";
import GameOver from "./GameOver.js";
import Utils from './Utils.js';
import $ from 'jquery'; 

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = 
      {count: 10,
      score: 0,
      isWinner: false,
      country: Utils.loadCountry()
      }
      this.handler = this.handler.bind(this)
      this.reset = this.reset.bind(this)
  }
  handler(score, isWinner) {
      this.setState({
        score: score,
        isWinner: isWinner
      });
  } 
  reset(){
    Utils.loadMenu();
    Utils.resetCounties();
    $('#gameOver').hide();
    this.setState({
      score: 0,
      isWinner: false,
      count: 10,
      country: Utils.loadCountry()
    });
  }
  render() {
      return (
        <div>
            <div id='mainMenu'>
              <img alt="Earth" width="400px" height="400px" src={require('./img/earth.png')}></img>
              <h1>Geography.Js</h1>
              <h5>A simple quiz app made in React.Js</h5>
            </div>
            <div id="btns">
              <FlagsGame count={this.state.count} 
                  score={this.state.score} 
                  isWinner={this.state.isWinner}
                  country={this.state.country}
                  handler={this.handler}/>
            </div>
            <GameOver count={this.state.count} 
                score={this.state.score} 
                isWinner={this.state.isWinner}
                reset={this.reset}/>
      </div>
      )
    }
  }

    