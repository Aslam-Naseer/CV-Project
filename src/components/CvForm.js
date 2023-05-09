import { Component } from "react";
import Personal from "./Personal";
import Experiences from "./Experiences";
import EducationList from "./EducationList";

class CvForm extends Component {
  render() {
    return (
      <div className="cv-form">
        <Personal />
        <Experiences
          addExp={this.props.addExp}
          delExp={this.props.delExp}
          exps={this.props.cv.experience}
        />
        <EducationList
          addEdu={this.props.addEdu}
          delEdu={this.props.delEdu}
          edus={this.props.cv.education}
        />
      </div>
    );
  }
}

export default CvForm;
