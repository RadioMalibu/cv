import React from "react";
import Other from "./other.js";
import Texts from '../../api/cv-texts.js';

import "./content.css";

class OtherContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginRight: Texts.getAllJobs().length * 400
    }
  }

  nextPrev = (direction) => {
    let windowWidth = window.innerWidth * 0.8;
    let containerWidth = Math.floor(windowWidth / 400) * 400;

    if(direction === "prev"){
      if(this.state.marginLeft !== 0){
        this.setState(
          {
            marginLeft: this.state.marginLeft - containerWidth,
            marginRight: this.state.marginRight + containerWidth
          });
      }
    }else{
      if(this.state.marginRight > 800){
        this.setState(
          {
            marginLeft: this.state.marginLeft + containerWidth,
            marginRight: this.state.marginRight - containerWidth
          });
      }
    }
  }
  render(){
    let otherTitle = ["otherTitle"];
    let otherContent = ["otherContent"];
    let backButton = ["backButton"];
    let nextButton = ["nextButton"];

    const otherCount = Texts.getAllOthers().length;
    const contentWidth = otherCount * 400;
    let windowWidth = window.innerWidth * 0.8;
    let containerWidth = Math.floor(windowWidth / 400) * 400;

    if(this.props.area === "other"){
      otherTitle = ["otherTitle transitionOther"];
      otherContent = ["otherContent transitionOther"];
    }else{
      otherContent = ["otherContent transition"];
    }

    if(this.state.marginLeft === 0){
      backButton = ["backButton fade"];
    }
    if(this.state.marginRight <= 800){
      nextButton = ["nextButton fade"];
    }

    let blockStyle = {
      width: contentWidth + 'px',
      marginLeft: '-' + this.state.marginLeft + 'px',
      WebkitTransition: 'margin-left 3s 0s',
      transition: 'margin-left 3s 0s',
    };

    return(
      <div>
        <div className={otherTitle.join(' ')}>
          <h2>Other Merits</h2>
        </div>
        <div className={otherContent.join(' ')} style={{width: containerWidth + 'px'}}>
        <div className={backButton.join(' ')} onClick={(direction) => this.nextPrev("prev")}>
          <div className="back"></div>
        </div>
          <div style={blockStyle}>
            {
              Texts.getAllOthers().map((other, index) => {
              return(<Other
                  key={index}
                  title = {other.title}
                  company = {other.company}
                  start = {other.startDate}
                  end = {other.endDate}
                  description = {other.description}
                />)
              })
            }
          </div>
          <div className={nextButton.join(' ')} onClick={(direction) => this.nextPrev("next")}>
            <div className="next"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default OtherContent
