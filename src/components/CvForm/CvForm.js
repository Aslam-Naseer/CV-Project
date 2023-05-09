import { Component } from "react";
import Personal from "./Personal";
import Experiences from "./Experiences";
import EducationList from "./EducationList";

class CvForm extends Component {
  render() {
    return (
      <div className="cv-form">
        <Personal
          handleChange={this.props.changePersonal}
          values={this.props.cv.personalInfo}
        />
        <Experiences
          addExp={this.props.addExp}
          delExp={this.props.delExp}
          exps={this.props.cv.experience}
          handleChange={this.props.changeExperience}
        />
        <EducationList
          addEdu={this.props.addEdu}
          delEdu={this.props.delEdu}
          edus={this.props.cv.education}
          handleChange={this.props.changeEducation}
        />
      </div>
    );
  }
}

export default CvForm;
