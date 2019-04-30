import React from "react";

// Class GameOver by Nick Pothier
// This is the component for the Game Over screen
export default class GameOver extends React.Component {
      // Function render creates all the quiz game's components in the follow order:
      // - Text based on the state of isWinner (if win or lose)
      // - Return Button whose color is based on if you wine or lose
      render (){
          return(
              <div id="gameOver" style={{display: 'none'}}>
                {!this.props.isWinner ? <div className='loser'>Game Over</div> : 
                <div className='winner'>Winner</div>}
                <h3 className='finalScore'>Your final score was: {this.props.score}</h3>
                <div className='goBackButton'>
                  <button className={!this.props.isWinner ? "btn btn-danger" : "btn btn-success"} onClick={this.props.reset}>Go Back</button>
                </div>
              </div>
          );
      }
}