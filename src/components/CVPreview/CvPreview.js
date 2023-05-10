import { Component } from "react";
import Info from "./Info";
import Exp from "./Exp";
import Edu from "./Edu";

class CvPreview extends Component {
  render() {
    return (
      <div className="cv-preview">
        <Info pi={this.props.cv.personalInfo} />
        <Exp exps={this.props.cv.experience} />
        <Edu edus={this.props.cv.education} />
      </div>
    );
  }
}

export default CvPreview;
