import React from 'react';
import FlagsGame from "./FlagsGame.js";
import GameOver from "./GameOver.js";
import Utils from './Utils.js';
import $ from 'jquery'; 

// Class App by Nick Pothier
// This is the class for the main menu
export default class App extends React.Component {
  // State cointains four varibales:
  // Count is the amount of time permited to answer a question
  // Score is the score intializer
  // isWinner determines Gameover functionality
  // Country intializes the first country using the load country function in Utils 
  constructor (props) {
    super(props)
    this.state = 
      {count: 10,
      score: 0,
      isWinner: false,
      country: Utils.loadCountry()
      }
      // Binds the function handler and reset for use in other components
      this.handler = this.handler.bind(this)
      this.reset = this.reset.bind(this)
  }
  // Function handler sets the score and isWinner in the state
  handler(score, isWinner) {
      this.setState({
        score: score,
        isWinner: isWinner
      });
  } 
  // Function reset basically resets all the necessary state variables + hides the GameOver componenet
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
  // Function render creates all the quiz game's components in the follow order:
  // - Main Menu text
  // - Flag Game Component (appears as button then populates from there)
  // - Game Over Component (hidden)
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

    