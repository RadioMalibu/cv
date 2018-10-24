import React from "react";

import "./content.css";

class Education extends React.Component {
  render(){
    let levelStyle = {
      borderBottom: this.props.percent + 'px solid #94a655',
      borderLeft: this.props.percent * 1.5 + 'px solid transparent',
      top: 100 - this.props.percent + 'px',
    };

    return(
      <div className="languageBlock">
        <div className="levelHundred">
          <div className="level" style={levelStyle}>
          </div>
        </div>
        <h2>{this.props.name}</h2>
        <p>{this.props.level}</p>
      </div>
    )
  }
}

export default Education
