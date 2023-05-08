import { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
  render() {
    return (
      <div className="edu-list">
        <p>Education</p>
        <Education num={1} />
        <button className="add-btn">Add</button>
      </div>
    );
  }
}

export default EducationList;
