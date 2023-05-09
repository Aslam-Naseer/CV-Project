import { Component } from "react";
import InputBox from "./InputBox";

class Education extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="education">
        <InputBox name="University" num={num} />
        <InputBox name="City" num={num} />
        <InputBox name="Degree" num={num} />
        <InputBox name="Subject" num={num} />
        <InputBox name="From" num={num} />
        <InputBox name="To" num={num} />
        <button className="del-btn" onClick={this.props.delEdu}>
          Delete
        </button>
      </div>
    );
  }
}

export default Education;
