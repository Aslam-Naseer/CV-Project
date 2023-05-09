import { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
  render() {
    let c = 0;
    const eduDivs = [];
    this.props.edus.forEach((expItem) => {
      c += 1;
      eduDivs.push(<Education num={c} delEdu={this.props.delEdu} />);
    });

    return (
      <div className="edu-list">
        <p>Education</p>
        {eduDivs}
        <button className="add-btn" onClick={this.props.addEdu}>
          Add
        </button>
      </div>
    );
  }
}

export default EducationList;
