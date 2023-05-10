import { Component } from "react";
import Info from "./Info";
import Exp from "./Exp";

class CvPreview extends Component {
  render() {
    return (
      <div className="cv-preview">
        <Info pi={this.props.cv.personalInfo} />
        <Exp exps={this.props.cv.experience} />
      </div>
    );
  }
}

export default CvPreview;
