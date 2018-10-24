import React from "react";

import "./content.css";

class IntroContent extends React.Component {
  OpenIntro = () => {
    this.props.OpenSection("home")
  }

  render(){
    let introBlock = ["introBlock textBlockBorderLeft"];
    let blockContent = ["blockContent"]

    if(this.props.render)
    {
      introBlock.push('openBlock ');
    }

    if(this.props.area === "work"){
      introBlock = ["introBlock textBlockBorderLeft transitionWork"];
      blockContent = ["blockContent transitionWork"];
    }

    if(this.props.area === "education"){
      introBlock = ["introBlock textBlockBorderLeft transitionEducation"];
      blockContent = ["blockContent transitionEducation"];
    }

    if(this.props.area === "other"){
      introBlock = ["introBlock textBlockBorderLeft transitionOther"];
      blockContent = ["blockContent transitionOther"];
    }

    if(this.props.area === "data"){
      introBlock = ["introBlock textBlockBorderLeft transitionData"];
      blockContent = ["blockContent transitionData"];
    }

    return(
      <div className={introBlock.join(' ')} onClick={this.OpenIntro}>
        <h1>Brian Koudijs</h1>
        <h2>Interaction Designer & Front-End Developer</h2>
        <p className={blockContent.join(' ')}>Brian has a master within Interaction Design after which he has developed his knowledge within the field of web and application development through self-study and courses. Brian’s passion is to be able to combine UX/UI design, graphic design and web design with the programming side of web and application development and thus to be part of all stages of development. He can comfortably work with the design tools of the Adobe Creative Cloud suite and he feels right at home dealing with programming languages like HTML, CSS, Javascript, C# and ASP.Net.
        </p>
        <p className={blockContent.join(' ')}>
          Brian as a person is curious and strives to always learn new things, whether it is a new (programming) language, a new development or design tool, or a new skill to have as a hobby (be sure to ask about the latest venture). When it comes to challenges Brian will often raise the bar by setting the goal a bit outside of his current skillset, so he will face the need to widen his skillset and develop in the process. He has the ability to stay calm and centered in particularly stressful situation and will always find a solution to the problem he faces.
        </p>
        <p className={blockContent.join(' ')}>
          This site will give you some more insight in who Brian is and who Brian has been. Hopefully together you will be able to find out who Brian will be in the future.
        </p>
      </div>
    )
  }
}

export default IntroContent
