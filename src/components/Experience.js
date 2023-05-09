import { Component } from "react";
import InputBox from "./InputBox";

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <InputBox name="Position" {...this.props} />
        <InputBox name="Company" {...this.props} />
        <InputBox name="City" {...this.props} />
        <InputBox name="From" {...this.props} />
        <InputBox name="To" {...this.props} />
        <button
          className="del-btn"
          onClick={this.props.delExp}
          data-num={this.props.num}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
