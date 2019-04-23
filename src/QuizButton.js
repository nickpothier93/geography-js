import React from "react";

export default class QuizButton extends React.Component {
    render(){
        return(
            <div>
                <button onClick={() => this.props.onClickFunc(this.props.answer)}>{this.props.answer}</button>
            </div>
            );
        }
    }