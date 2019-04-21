import React from "react";

export default class QuizButton extends React.Component {
    render(){
        return(
            <div>
                <button>{this.props.answer}</button>
            </div>
            );
        }
    }