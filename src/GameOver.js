import React from "react";

export default class GameOver extends React.Component {
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