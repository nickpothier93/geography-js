import React from "react";

// Class Flag component by Nick Pothier
// This is component for the Flag
export default class Flag extends React.Component {
    // When component renders, the properities contain a location for an img file (this.props.flagFile). 
    // Image is dynically updated and changed due to the pointer variable.
    render(){
        return(
            <div className="flagDiv">
                <img className='flagEffect' width='400px' height='100%' src={this.props.flagFile} alt="flag"/>
            </div>
        );
    }
}