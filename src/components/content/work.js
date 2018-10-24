import React from "react";

import "./content.css";

class Work extends React.Component {
  render(){
    return(
        <div className="workBlock">
          <h2>{this.props.title}</h2>
          <h3>{this.props.company}</h3>
          <h4>{this.props.start} - {this.props.end}</h4>
          <p>{this.props.description}</p>
        </div>
    )
  }
}

export default Work
