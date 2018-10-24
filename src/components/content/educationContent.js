import React from "react";
import Education from "./education.js";
import Texts from '../../api/cv-texts.js';

import "./content.css";

class EducationContent extends React.Component {
  render(){
    let educationTitle = ["educationTitle"];
    let educationContent = ["educationContent"];

    if(this.props.area === "education"){
      educationTitle = ["educationTitle transitionEducation"];
      educationContent = ["educationContent transitionEducation"];
    }else{
      educationContent = ["educationContent transition"];
    }

    return(
      <div>
        <div className={educationTitle.join(' ')}>
          <h2>Education</h2>
        </div>
        <div className={educationContent.join(' ')}>
          {
            Texts.getAllEducation().map((edu, index) => {
            return(<Education
                key={index}
                title = {edu.title}
                level = {edu.level}
                school = {edu.school}
                start = {edu.startDate}
                end = {edu.endDate}
                description = {edu.description}
              />)
            })
          }
        </div>
      </div>
    )
  }
}

export default EducationContent
