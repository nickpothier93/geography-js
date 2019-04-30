import React from "react";
import Flag from "./Flag.js"
import QuizButton from "./QuizButton"
import $ from 'jquery';
import Utils from "./Utils";

// Class FlagGame by Nick Pothier
// This is the component for the game engine
export default class FlagGame extends React.Component {
  // State cointains four varibales (all loaded by the properties in App):
  // Count is the amount of time permited to answer a question
  // Score is the score intializer
  // isWinner determines Gameover functionality
  // Country intializes the first country using the load country function in Utils 
  constructor (props) {
    super(props)
    this.state =
      {count: props.count,
      country: props.country,
      score: props.score,
      isOver: false
      }
  }
  // Function tick is timer handler function
  tick () {
    // If count is greater than 0 it will reduce it by 1
    if (this.state.count !== 0){
      this.setState({count: (this.state.count - 1)})
    }
    // The function has picked up the player ran out of time and will end the game.
    else {
      if(this.state.isOver === false){
        this.setState({isOver: true});
        this.props.handler(this.state.score,false);
        $('#flagGame').hide();
        $('#gameOver').show();
      }
    }

  }
  // Function selection is the button handler function
  selection (pressed){
    // If the user selected the right answer
    if (pressed === this.state.country.cor){
      // Checks to deterine if this flag was not the last flag
      if(!Utils.winner()){
        // Loads a new country, resets the score, adds 10 + the remaining timer count to the score
        this.setState({country : (Utils.loadCountry())});
        this.setState({count: (this.props.count)});
        this.setState({score: (this.state.score + 10 + this.state.count)});
      }
      else{
        // If this was the last flag the Winner screen will appear in Game Over.
        $('#flagGame').hide();
        $('#gameOver').show();
        this.setState({isOver: true});
        this.setState({count: (0)});
        this.props.handler(this.state.score + 10 + this.state.count,true);
      }
    }
    // If the wrong answer is selected the game is over
    else{
      this.setState({isOver: true});
      $('#gameOver').show();
      $('#flagGame').hide();
      this.props.handler(this.state.score,false);
    }
  }
  // Function startTimer is the function that kicks off the game + timer
  startTimer () {
    // Hides menu and loads game component
    Utils.clearMenu();
    $('#flagGame').show();
    // Clears any data that could have been left there
    clearInterval(this.timer)
    // Uses Node.JS Timeount functionality to bind the function tick at 1 second per run
    this.timer = setInterval(this.tick.bind(this), 1000)
    // Sets varaibles in the state
    this.setState({isOver: false});
    this.setState({count: (this.props.count)});
    this.setState({score: (this.props.score)});
    this.setState({country: (this.props.country)});
  }
  // Function render creates all the quiz game's components in the follow order:
  // - Start button that launches the game
  // - The Score and Time count (located on opposite sides)
  // - Creating Flag component
  // - Creating QuizButton components dynamically based on how many buttons are required
  render() {
    return (
      <div>
        <div id="flagsBtn">
          <button type="button" className="btn btn-success" onClick={this.startTimer.bind(this)}>Start</button>
        </div>
        <div id="flagGame" style={{display: 'none'}}>
        <div className='scoreCard'>
          <div className='alignleft'>Time Remaining: {this.state.count}</div>
          <div className='alignright'>Score: {this.state.score}</div>
        </div>
          <Flag flagFile={this.state.country.src} />
          <div className="answerBtns">
            {this.state.country.buttons.map(number => (
              <QuizButton key={number} answer={number} onClickFunc={this.selection.bind(this)}/>
            ))}
          </div>
        </div>
      </div>

    )
  }
}

