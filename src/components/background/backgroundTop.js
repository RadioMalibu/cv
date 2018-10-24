import React from "react";
import IntroContent from "../content/introContent.js";
import WorkContent from "../content/workContent.js";
import EducationContent from "../content/educationContent.js";
import OtherContent from "../content/otherContent.js";
import DataContent from "../content/dataContent.js";

import "./background.css";

class BackgroundTop extends React.Component {
  setSection = () => {
    this.props.OpenSection("home")
  }

  render(){
    let backgroundTop = ["backgroundTop"];
    let workBG = ["WorkBG"];
    let educationBG = ["EducationBG"];
    let otherBG = ["OtherBG"];
    let welcome = ["Welcome"];

    if(this.props.render === true){
      welcome = ["Welcome fadeOut"];
    }

    if(this.props.area === "work"){
      workBG = ["WorkBG transitionWork"];
    }

    if(this.props.area === "education"){
      workBG = ["WorkBG transitionEducation"];
      educationBG = ["EducationBG transitionEducation"];
      otherBG = ["OtherBG transitionEducation"];
      backgroundTop = ["backgroundTop transitionEducation"];
    }

    if(this.props.area === "other"){
      otherBG = ["OtherBG transitionOther"];
    }

    if(this.props.area === "data"){
      backgroundTop = ["backgroundTop transitionData"];
    }

    return(
      <div>
        <div className={backgroundTop.join(' ')}></div>
        <div className={welcome.join(' ')}>
          <img className="timer" src={require(`../../images/timer.png`)} alt="timer" />
        </div>
        <IntroContent
          area={this.props.area}
          render={this.props.render}
          OpenSection={(section) => this.setSection(section)}
        />
        <WorkContent area={this.props.area} />
        <EducationContent area={this.props.area} />
        <OtherContent area={this.props.area} />
        <DataContent area={this.props.area} />

        <div className={workBG.join(' ')}>
          <div className="BuildingOne"></div>
          <div className="BuildingTwo"></div>
          <div className="BuildingThree"></div>
          <div className="BuildingFour"></div>
          <div className="BuildingFive"></div>
          <div className="BuildingSix"></div>
        </div>
        <div className={educationBG.join(' ')}>
          <div className="cloudOne">
              <img className="cloud" src={require(`../../images/cloud.gif`)} alt="cloud" />
          </div>
          <div className="cloudTwo">
              <img className="cloud" src={require(`../../images/cloud.gif`)} alt="cloud" />
          </div>
          <div className="cloudThree">
              <img className="cloud" src={require(`../../images/cloud.gif`)} alt="cloud" />
          </div>
        </div>
        <div className={otherBG.join(' ')}>
          <div className="MountainOne"></div>
          <div className="MountainTwo"></div>
          <div className="MountainThree"></div>
          <div className="MountainFour"></div>
        </div>
      </div>
    )
  }
}

export default BackgroundTop
