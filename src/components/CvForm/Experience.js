import { Component } from "react";
import InputBox from "./InputBox";

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <InputBox name="position" {...this.props} />
        <InputBox name="company" {...this.props} />
        <InputBox name="city" {...this.props} />
        <InputBox name="from" {...this.props} />
        <InputBox name="to" {...this.props} />
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
