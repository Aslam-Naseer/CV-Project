import { Component } from "react";
import Personal from "./Personal";
import Experiences from "./Experiences";

class CvForm extends Component {
  render() {
    return (
      <div className="cv-form">
        <Personal />
        <Experiences />
      </div>
    );
  }
}

export default CvForm;
