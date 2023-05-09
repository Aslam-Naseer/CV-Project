import { Component } from "react";
import InputBox from "./InputBox";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <InputBox name="University" {...this.props} />
        <InputBox name="City" {...this.props} />
        <InputBox name="Degree" {...this.props} />
        <InputBox name="Subject" {...this.props} />
        <InputBox name="From" {...this.props} />
        <InputBox name="To" {...this.props} />
        <button
          className="del-btn"
          onClick={this.props.delEdu}
          data-num={this.props.num}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Education;
