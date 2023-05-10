import { Component } from "react";
import Info from "./Info";

class CvPreview extends Component {
  render() {
    return (
      <div className="cv-preview">
        <Info pi={this.props.cv.personalInfo}></Info>
      </div>
    );
  }
}

export default CvPreview;
