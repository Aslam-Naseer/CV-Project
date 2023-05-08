import { Component } from "react";
import InputBox from "./InputBox";

class Experience extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="experience">
        <InputBox name="Position" num={num} />
        <InputBox name="Company" num={num} />
        <InputBox name="City" num={num} />
        <InputBox name="From" num={num} />
        <InputBox name="To" num={num} />
        <button className="del-btn">Delete</button>
      </div>
    );
  }
}

export default Experience;
