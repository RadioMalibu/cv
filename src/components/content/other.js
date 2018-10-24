import React from "react";

import "./content.css";

class Other extends React.Component {
  render(){
    return(
        <div className="otherBlock">
          <h2>{this.props.title}</h2>
          <h3>{this.props.company}</h3>
          <h4>{this.props.start} - {this.props.end}</h4>
          <p>{this.props.description}</p>
        </div>
    )
  }
}

export default Other
