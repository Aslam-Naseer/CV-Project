import { Component } from "react";
import InputBox from "./InputBox";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <InputBox name="university" {...this.props} />
        <InputBox name="city" {...this.props} />
        <InputBox name="subject" {...this.props} />
        <InputBox name="from" {...this.props} />
        <InputBox name="to" {...this.props} />
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
