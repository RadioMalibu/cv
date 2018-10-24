import React from "react";

import "./buttons.css";

class Buttons extends React.Component {
  OpenWork = () => {
    this.props.OpenSection("work")
  }

  OpenEducation = () => {
    this.props.OpenSection("education")
  }

  OpenOther = () => {
    this.props.OpenSection("other")
  }

  OpenData = () => {
    this.props.OpenSection("data")
  }

  render(){
    let workButton = ["workButton button"];
    let educationButton = ["educationButton button"];
    let otherButton = ["otherButton button"];
    let dataButton = ["dataButton button"];

    if(this.props.area === "work"){
      workButton = ["workButton button workOpen current"];
      educationButton = ["educationButton button workOpen"];
      dataButton = ["dataButton button workOpen"];
    }

    if(this.props.area === "education"){
      workButton = ["workButton button educationOpen"];
      educationButton = ["educationButton button educationOpen current"];
      otherButton = ["otherButton button educationOpen"];
    }

    if(this.props.area === "other"){
      educationButton = ["educationButton button otherOpen"];
      otherButton = ["otherButton button otherOpen current"];
      dataButton = ["dataButton button otherOpen"];
    }

    if(this.props.area === "data"){
      workButton = ["workButton button dataOpen"];
      otherButton = ["otherButton button dataOpen"];
      dataButton = ["dataButton button dataOpen current"];
    }

    return(
      <div className="buttonWrapper">
        <div className={educationButton.join(' ')} onClick={this.OpenEducation}>
          <div className="educationButtonText">
            <h2>Education</h2>
          </div>
          <div className="arrow-up"></div>
        </div>

        <div className={workButton.join(' ')} onClick={this.OpenWork}>
          <div className="workButtonText">
            <h2>Work Experience</h2>
          </div>
          <div className="arrow-left"></div>
        </div>

        <div className={otherButton.join(' ')} onClick={this.OpenOther}>
          <div className="otherButtonText">
            <h2>Other Merits</h2>
          </div>
          <div className="arrow-right"></div>
        </div>

        <div className={dataButton.join(' ')} onClick={this.OpenData}>
          <div className="dataButtonText">
            <h2>Languages</h2>
          </div>
          <div className="arrow-down"></div>
        </div>

        <a  href="http://radiomalibu.github.io/portfolio" target="_blank">
          <div className="portfolioButton"></div>
        </a>
      </div>
    )
  }
}

export default Buttons
