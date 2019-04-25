import React from "react";
import Flag from "./Flag.js"
import QuizButton from "./QuizButton"
import $ from 'jquery';
import Utils from "./Utils";

export default class FlagGame extends React.Component {
  constructor (props) {
    super(props)
    this.state =
      {count: props.count,
      country: props.country,
      score: props.score,
      isOver: false
      }
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if (this.state.count !== 0){
      this.setState({count: (this.state.count - 1)})
    }
    else {
      if(this.state.isOver === false){
        this.setState({isOver: true});
        this.props.handler(this.state.score,false);
        $('#flagGame').hide();
        $('#gameOver').show();
      }
    }

  }
  selection (pressed){
      if (pressed === this.state.country.cor){
        if(!Utils.winner()){
          this.setState({country : (Utils.loadCountry())});
          this.setState({count: (this.props.count)});
          this.setState({score: (this.state.score + 10 + this.state.count)});
        }
        else{
          $('#flagGame').hide();
          $('#gameOver').show();
          this.setState({isOver: true});
          this.setState({count: (0)});
          this.props.handler(this.state.score + 10 + this.state.count,true);
        }
      }
      else{
        this.setState({isOver: true});
        $('#gameOver').show();
        $('#flagGame').hide();
        this.props.handler(this.state.score,false);
      }
    }
  startTimer () {
    Utils.clearMenu();
    $('#flagGame').show();
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
    this.setState({isOver: false});
    this.setState({count: (this.props.count)});
    this.setState({score: (this.props.score)});
    this.setState({country: (this.props.country)});
  }
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

