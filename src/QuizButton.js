import React from "react";

// Class QuizButton by Nick Pothier
// This is the component for the buttons in the game engine
export default class QuizButton extends React.Component {
    // Renders a button that binds an onClick function from properities
    render(){
        return(
            <div>
                <button className='btn btn-secondary' onClick={() => this.props.onClickFunc(this.props.answer)}>{this.props.answer}</button>
            </div>
            );
        }
    }