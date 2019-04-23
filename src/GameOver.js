import React from "react";

export default class GameOver extends React.Component {
      render (){
          return(
              <div id="gameOver" style={{display: 'none'}}>
                {!this.props.isWinner ? <p>Game Over</p> : <p>Winner</p>}
                <p>Your Score: {this.props.score}</p>
                <button onClick={this.props.reset}>Go Back</button>
              </div>
          );
      }
}