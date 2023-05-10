import { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
  render() {
    let c = 0;
    const eduDivs = [];
    this.props.edus.forEach((expItem) => {
      eduDivs.push(
        <Education
          num={c}
          delEdu={this.props.delEdu}
          handleChange={this.props.handleChange}
          values={this.props.edus[c]}
          key={"eduPrev" + c}
        />
      );
      c += 1;
    });

    return (
      <div className="edu-list">
        <p className="form-para">Education</p>
        {eduDivs}
        <button className="add-btn" onClick={this.props.addEdu}>
          Add
        </button>
      </div>
    );
  }
}

export default EducationList;
