import React from "react";
import Work from "./work.js";
import Texts from '../../api/cv-texts.js';

import "./content.css";

class WorkContent extends React.Component {
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
    let workTitle = ["workTitle"];
    let workContent = ["workContent"];
    let backButton = ["backButton"];
    let nextButton = ["nextButton"];

    const workCount = Texts.getAllJobs().length;
    const contentWidth = workCount * 400;
    let windowWidth = window.innerWidth * 0.8;
    let containerWidth = Math.floor(windowWidth / 400) * 400;

    if(this.props.area === "work"){
      workTitle = ["workTitle transitionWork"];
      workContent = ["workContent transitionWork"];
    }else{
      workContent = ["workContent transition"];
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
        <div className={workTitle.join(' ')}>
          <h2>Work Experience</h2>
        </div>
        <div className={workContent.join(' ')} style={{width: containerWidth + 'px'}}>
        <div className={backButton.join(' ')} onClick={(direction) => this.nextPrev("prev")}>
          <div className="back"></div>
        </div>
          <div style={blockStyle}>
            {
              Texts.getAllJobs().map((work, index) => {
              return(<Work
                  key={index}
                  title = {work.title}
                  company = {work.company}
                  start = {work.startDate}
                  end = {work.endDate}
                  description = {work.description}
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

export default WorkContent
