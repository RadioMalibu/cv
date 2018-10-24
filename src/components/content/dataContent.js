import React from "react";
import Data from "./data.js";
import Texts from "../../api/cv-texts.js";

import "./content.css";

class DataContent extends React.Component {
  render(){
    let dataTitle = ["dataTitle"];
    let dataContent = ["dataContent"];

    if(this.props.area === "data"){
      dataTitle = ["dataTitle transitionData"];
      dataContent = ["dataContent transitionData"];
    }else{
      dataContent = ["dataContent transition"];
    }

    return(
      <div>
        <div className={dataTitle.join(' ')}>
          <h2>Languages</h2>
        </div>
        <div className={dataContent.join(' ')}>
          {
            Texts.getAllLanguages().map((lang, index) => {
                return(
                  <Data
                    key={index}
                    id = {lang.id}
                    name = {lang.name}
                    level = {lang.level}
                    percent = {lang.Percent}
                />)
            })
          }
        </div>
      </div>
    )
  }
}

export default DataContent
