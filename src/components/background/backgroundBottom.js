import React from "react";

import "./background.css";

class BackgroundBottom extends React.Component {
  render(){
    let backgroundBottom = ["backgroundBottom"];

    if (this.props.area === "education"){
        backgroundBottom = ["backgroundBottom transitionEducation"]
    }
    if (this.props.area === "data"){
        backgroundBottom = ["backgroundBottom transitionData"]
    }
    return(
      <div className={backgroundBottom.join(' ')}>
        <div className="pondWrap">
          <img className="cloud" src={require(`../../images/pond.gif`)} alt="pond" />
        </div>
      </div>
    )
  }
}

export default BackgroundBottom
