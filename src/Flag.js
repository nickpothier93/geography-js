import React from "react";

export default class Flag extends React.Component {
    render(){
        return(
            <img src={this.props.flagFile} alt="flag" width="200px" height="100px"/>
        );
    }
}