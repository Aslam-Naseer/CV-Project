import { Component } from "react";
import Personal from "./Personal";
import Experiences from "./Experiences";
import EducationList from "./EducationList";
import FormButtons from "./FormButtons";

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
        <FormButtons
          saveCv={this.props.saveCv}
          loadCv={this.props.loadCv}
          resetForm={this.props.resetForm}
        />
      </div>
    );
  }
}

export default CvForm;
