import React, { Component } from "react";

import "./progressbar.css";
class Progressbar extends Component {
  //   handleButtonClick = () => {
  //     let { progress } = this.state;
  //     if (progress < 100) {
  //       let range = this.state.progress + 20;
  //       this.setState({ progress: range });
  //     }
  //   };
  //   handleButtonReset = () => {
  //     this.setState({ progress: 0 });
  //   };
  render() {
    const { progress } = this.props;
    return (
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
            {" "}
          </div>
        </div>
      </div>
    );
  }
}
export default Progressbar;
