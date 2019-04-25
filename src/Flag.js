import React from "react";

export default class Flag extends React.Component {
    render(){
        return(
            <div className="flagDiv">
                <img className='flagEffect' width='25%' height='25%' src={this.props.flagFile} alt="flag"/>
            </div>
        );
    }
}