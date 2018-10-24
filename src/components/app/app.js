import React from "react";
import Buttons from '../buttons/buttons.js';
import BackgroundTop from '../background/backgroundTop.js';
import BackgroundBottom from '../background/backgroundBottom.js';

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      area: "home",
    }
  }

  componentDidMount = () => {
    setTimeout(function() {
        this.setState(
          {
            render: true
          }
        )
    }.bind(this), 1000)
  }

  setGlobalSection = (section) => {
    this.setState({area: section})
  }

  render() {
    return (
      <div className="appContent">
        <BackgroundTop
          render={this.state.render}
          area={this.state.area}
          OpenSection={(section) => this.setGlobalSection(section)}
        />
        <BackgroundBottom area={this.state.area}/>
        <Buttons
          area={this.state.area}
          OpenSection={(section) => this.setGlobalSection(section)}
        />
      </div>
    )
  }

}

export default App
