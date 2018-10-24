import React from "react";

import "./content.css";

class Education extends React.Component {
  render(){
    return(
        <div className="educationBlock">
          <h2>{this.props.title} - {this.props.level}</h2>
          <h3>{this.props.school}</h3>
          <h4>{this.props.start} - {this.props.end}</h4>
          <p>{this.props.description}</p>
        </div>
    )
  }
}

export default Education
