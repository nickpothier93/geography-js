import React from "react";
import Flag from "./Flag.js"
import QuizButton from "./QuizButton"
import $ from 'jquery'; 
import Utils from "./Utils";

export default class FlagGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {count: 10}
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if (this.state.count !== 0){
      this.setState({count: (this.state.count - 1)})
    }
  }
  startTimer () {
    Utils.clearMenu();
    $('#flagGame').show();
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
    render() {
      return (
        <div>
          <div id="flagsBtn">
            <button onClick={this.startTimer.bind(this)}>Flags</button>
          </div>
          <div id="flagGame" style={{display: 'none'}}>
            <Flag flagFile={this.props.obj.ae.src} />
            <QuizButton answer={this.props.obj.ae.b1} />
            <QuizButton answer={this.props.obj.ae.b2} />
            <QuizButton answer={this.props.obj.ae.b3} />
            <QuizButton answer={this.props.obj.ae.b4}/>
            <div>Time Remaining: {this.state.count}</div>
          </div>
        </div>
      )
    }
}