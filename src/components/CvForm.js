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
          exps={this.props.cv.experience}
        />
        <EducationList />
      </div>
    );
  }
}

export default CvForm;
